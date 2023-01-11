using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API.Models
{
    public partial class WebAppDbContext : DbContext
    {
        public WebAppDbContext()
        {
        }

        public WebAppDbContext(DbContextOptions<WebAppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Activo> Activos { get; set; }
        public virtual DbSet<ActivoTipo> ActivoTipos { get; set; }
        public virtual DbSet<ActivoTipoCategorium> ActivoTipoCategoria { get; set; }
        public virtual DbSet<Condicion> Condicions { get; set; }
        public virtual DbSet<Departamento> Departamentos { get; set; }
        public virtual DbSet<Informacion> Informacions { get; set; }
        public virtual DbSet<Inventario> Inventarios { get; set; }
        public virtual DbSet<Localidad> Localidads { get; set; }
        public virtual DbSet<Stock> Stocks { get; set; }
        public virtual DbSet<Unidad> Unidads { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<ViewActivo> ViewActivos { get; set; }

//         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//         {
//             if (!optionsBuilder.IsConfigured)
//             {
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                 optionsBuilder.UseSqlServer("Server=FIMED-IT-PC01\\SQLEXPRESS;Database=SWF;Trusted_Connection=True;");
//             }
//         }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Activo>(entity =>
            {
                entity.ToTable("Activo", "Inventario");

                entity.Property(e => e.Color)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Componentes)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.IdCodigo)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Marca)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Modelo)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Observaciones)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Serial)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdActivoTipoCategoriaNavigation)
                    .WithMany(p => p.Activos)
                    .HasForeignKey(d => d.IdActivoTipoCategoria)
                    .HasConstraintName("FK_ActivoTipoCategoria_ID");

                entity.HasOne(d => d.IdCondicionNavigation)
                    .WithMany(p => p.Activos)
                    .HasForeignKey(d => d.IdCondicion)
                    .HasConstraintName("FK_Condicion_ID");

                entity.HasOne(d => d.IdDepartamentoNavigation)
                    .WithMany(p => p.Activos)
                    .HasForeignKey(d => d.IdDepartamento)
                    .HasConstraintName("FK_Departamento_ID");

                entity.HasOne(d => d.IdInformacionNavigation)
                    .WithMany(p => p.Activos)
                    .HasForeignKey(d => d.IdInformacion)
                    .HasConstraintName("FK_Informacion_ID");

                entity.HasOne(d => d.IdLocalidadNavigation)
                    .WithMany(p => p.Activos)
                    .HasForeignKey(d => d.IdLocalidad)
                    .HasConstraintName("FK_Localidad_ID");

                entity.HasMany(d => d.IdInventarios)
                    .WithMany(p => p.IdActivos)
                    .UsingEntity<Dictionary<string, object>>(
                        "InventarioActivo",
                        l => l.HasOne<Inventario>().WithMany().HasForeignKey("IdInventario").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_Inventario_ID"),
                        r => r.HasOne<Activo>().WithMany().HasForeignKey("IdActivo").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_ActivoID_ID"),
                        j =>
                        {
                            j.HasKey("IdActivo", "IdInventario").HasName("PK_InventarioActivo_ID");

                            j.ToTable("InventarioActivo", "Inventario");
                        });
            });

            modelBuilder.Entity<ActivoTipo>(entity =>
            {
                entity.ToTable("ActivoTipo", "Inventario");

                entity.HasIndex(e => e.Nombre, "UNIQ_NombreActivoTipo")
                    .IsUnique();

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(101)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ActivoTipoCategorium>(entity =>
            {
                entity.ToTable("ActivoTipoCategoria", "Inventario");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdActivoTipoNavigation)
                    .WithMany(p => p.ActivoTipoCategoria)
                    .HasForeignKey(d => d.IdActivoTipo)
                    .HasConstraintName("FK_ActivoTipoCategoriaID");
            });

            modelBuilder.Entity<Condicion>(entity =>
            {
                entity.ToTable("Condicion", "Inventario");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Departamento>(entity =>
            {
                entity.ToTable("Departamento", "Compania");

                entity.HasIndex(e => e.Nombre, "UNIQ_NombreDepartamento")
                    .IsUnique();

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(101)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Informacion>(entity =>
            {
                entity.ToTable("Informacion", "Compania");

                entity.HasIndex(e => e.Alias, "UNIQ_ALIAS")
                    .IsUnique();

                entity.HasIndex(e => e.Rnc, "UNIQ_RNC")
                    .IsUnique();

                entity.Property(e => e.Alias)
                    .IsRequired()
                    .HasMaxLength(51)
                    .IsUnicode(false);

                entity.Property(e => e.Direccion)
                    .HasMaxLength(201)
                    .IsUnicode(false);

                entity.Property(e => e.EstaActiva).HasDefaultValueSql("((1))");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.NombreComercial)
                    .IsRequired()
                    .HasMaxLength(51)
                    .IsUnicode(false);

                entity.Property(e => e.RazonSocial)
                    .IsRequired()
                    .HasMaxLength(51)
                    .IsUnicode(false);

                entity.Property(e => e.Rnc).HasColumnName("RNC");
            });

            modelBuilder.Entity<Inventario>(entity =>
            {
                entity.ToTable("Inventario", "Inventario");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Observaciones)
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Localidad>(entity =>
            {
                entity.ToTable("Localidad", "Compania");

                entity.HasIndex(e => e.Nombre, "UNIQ_NombreLocalidad")
                    .IsUnique();

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(101)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Stock>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Stock", "Inventario");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.IdActivo).HasDefaultValueSql("((0))");

                entity.Property(e => e.TotalActivos)
                    .HasColumnName("total_activos")
                    .HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Unidad>(entity =>
            {
                entity.ToTable("Unidad", "Compania");

                entity.HasIndex(e => e.Nombre, "UNIQ_NombreUnidad")
                    .IsUnique();

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(101)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Usuario", "Autenticacion");

                entity.Property(e => e.Alias)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Contrasena)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.FechaExpiracion).HasColumnType("datetime");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<ViewActivo>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("ViewActivo");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.IdCodigo)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
