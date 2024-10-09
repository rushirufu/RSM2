using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Inventario");

            migrationBuilder.EnsureSchema(
                name: "Compania");

            migrationBuilder.EnsureSchema(
                name: "Autenticacion");

            migrationBuilder.CreateTable(
                name: "ActivoTipo",
                schema: "Inventario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "varchar(101)", unicode: false, maxLength: 101, nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivoTipo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Condicion",
                schema: "Inventario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Condicion", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departamento",
                schema: "Compania",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "varchar(101)", unicode: false, maxLength: 101, nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departamento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Informacion",
                schema: "Compania",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RazonSocial = table.Column<string>(type: "varchar(51)", unicode: false, maxLength: 51, nullable: false),
                    NombreComercial = table.Column<string>(type: "varchar(51)", unicode: false, maxLength: 51, nullable: false),
                    Alias = table.Column<string>(type: "varchar(51)", unicode: false, maxLength: 51, nullable: false),
                    RNC = table.Column<int>(type: "int", nullable: false),
                    EstaActiva = table.Column<bool>(type: "bit", nullable: true, defaultValueSql: "((1))"),
                    Direccion = table.Column<string>(type: "varchar(201)", unicode: false, maxLength: 201, nullable: true),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Informacion", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Inventario",
                schema: "Inventario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: true),
                    Observaciones = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventario", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Localidad",
                schema: "Compania",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "varchar(101)", unicode: false, maxLength: 101, nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Localidad", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Stock",
                schema: "Inventario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdInformacion = table.Column<int>(type: "int", nullable: true),
                    IdActivo = table.Column<int>(type: "int", nullable: true, defaultValueSql: "((0))"),
                    total_activos = table.Column<int>(type: "int", nullable: true, defaultValueSql: "((0))")
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "Unidad",
                schema: "Compania",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(type: "varchar(101)", unicode: false, maxLength: 101, nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Unidad", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                schema: "Autenticacion",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Contrasena = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    FechaExpiracion = table.Column<DateTime>(type: "datetime", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    EstaActivo = table.Column<bool>(type: "bit", nullable: true),
                    Alias = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    IdEmpleado = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "ActivoTipoCategoria",
                schema: "Inventario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdActivoTipo = table.Column<int>(type: "int", nullable: true),
                    Nombre = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivoTipoCategoria", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActivoTipoCategoriaID",
                        column: x => x.IdActivoTipo,
                        principalSchema: "Inventario",
                        principalTable: "ActivoTipo",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Activo",
                schema: "Inventario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdInformacion = table.Column<int>(type: "int", nullable: true),
                    IdDepartamento = table.Column<int>(type: "int", nullable: true),
                    IdLocalidad = table.Column<int>(type: "int", nullable: true),
                    IdActivoTipoCategoria = table.Column<int>(type: "int", nullable: true),
                    IdCodigo = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Marca = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Color = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Modelo = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Componentes = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true),
                    Serial = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    IdCondicion = table.Column<int>(type: "int", nullable: true),
                    Observaciones = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActivoTipoCategoria_ID",
                        column: x => x.IdActivoTipoCategoria,
                        principalSchema: "Inventario",
                        principalTable: "ActivoTipoCategoria",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Condicion_ID",
                        column: x => x.IdCondicion,
                        principalSchema: "Inventario",
                        principalTable: "Condicion",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Departamento_ID",
                        column: x => x.IdDepartamento,
                        principalSchema: "Compania",
                        principalTable: "Departamento",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Informacion_ID",
                        column: x => x.IdInformacion,
                        principalSchema: "Compania",
                        principalTable: "Informacion",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Localidad_ID",
                        column: x => x.IdLocalidad,
                        principalSchema: "Compania",
                        principalTable: "Localidad",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "InventarioActivo",
                schema: "Inventario",
                columns: table => new
                {
                    IdActivo = table.Column<int>(type: "int", nullable: false),
                    IdInventario = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventarioActivo_ID", x => new { x.IdActivo, x.IdInventario });
                    table.ForeignKey(
                        name: "FK_ActivoID_ID",
                        column: x => x.IdActivo,
                        principalSchema: "Inventario",
                        principalTable: "Activo",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Inventario_ID",
                        column: x => x.IdInventario,
                        principalSchema: "Inventario",
                        principalTable: "Inventario",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Activo_IdActivoTipoCategoria",
                schema: "Inventario",
                table: "Activo",
                column: "IdActivoTipoCategoria");

            migrationBuilder.CreateIndex(
                name: "IX_Activo_IdCondicion",
                schema: "Inventario",
                table: "Activo",
                column: "IdCondicion");

            migrationBuilder.CreateIndex(
                name: "IX_Activo_IdDepartamento",
                schema: "Inventario",
                table: "Activo",
                column: "IdDepartamento");

            migrationBuilder.CreateIndex(
                name: "IX_Activo_IdInformacion",
                schema: "Inventario",
                table: "Activo",
                column: "IdInformacion");

            migrationBuilder.CreateIndex(
                name: "IX_Activo_IdLocalidad",
                schema: "Inventario",
                table: "Activo",
                column: "IdLocalidad");

            migrationBuilder.CreateIndex(
                name: "UNIQ_NombreActivoTipo",
                schema: "Inventario",
                table: "ActivoTipo",
                column: "Nombre",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ActivoTipoCategoria_IdActivoTipo",
                schema: "Inventario",
                table: "ActivoTipoCategoria",
                column: "IdActivoTipo");

            migrationBuilder.CreateIndex(
                name: "UNIQ_NombreDepartamento",
                schema: "Compania",
                table: "Departamento",
                column: "Nombre",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UNIQ_ALIAS",
                schema: "Compania",
                table: "Informacion",
                column: "Alias",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UNIQ_RNC",
                schema: "Compania",
                table: "Informacion",
                column: "RNC",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_InventarioActivo_IdInventario",
                schema: "Inventario",
                table: "InventarioActivo",
                column: "IdInventario");

            migrationBuilder.CreateIndex(
                name: "UNIQ_NombreLocalidad",
                schema: "Compania",
                table: "Localidad",
                column: "Nombre",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UNIQ_NombreUnidad",
                schema: "Compania",
                table: "Unidad",
                column: "Nombre",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InventarioActivo",
                schema: "Inventario");

            migrationBuilder.DropTable(
                name: "Stock",
                schema: "Inventario");

            migrationBuilder.DropTable(
                name: "Unidad",
                schema: "Compania");

            migrationBuilder.DropTable(
                name: "Usuario",
                schema: "Autenticacion");

            migrationBuilder.DropTable(
                name: "Activo",
                schema: "Inventario");

            migrationBuilder.DropTable(
                name: "Inventario",
                schema: "Inventario");

            migrationBuilder.DropTable(
                name: "ActivoTipoCategoria",
                schema: "Inventario");

            migrationBuilder.DropTable(
                name: "Condicion",
                schema: "Inventario");

            migrationBuilder.DropTable(
                name: "Departamento",
                schema: "Compania");

            migrationBuilder.DropTable(
                name: "Informacion",
                schema: "Compania");

            migrationBuilder.DropTable(
                name: "Localidad",
                schema: "Compania");

            migrationBuilder.DropTable(
                name: "ActivoTipo",
                schema: "Inventario");
        }
    }
}
