USE master
go
DROP DATABASE SWF
GO

--SELECT TABASE

CREATE DATABASE [SWF]
GO

USE [SWF]
GO

---- CREAR ESQUEMA
CREATE SCHEMA Compania;
GO
CREATE SCHEMA Inventario;
GO
CREATE SCHEMA Autenticacion;
GO

CREATE TABLE Inventario.Stock
(
    Id INT IDENTITY(1,1),
    IdInformacion INT,
    IdActivo INT DEFAULT(0),
    total_activos INT DEFAULT(0),
)

-- TABLE Companias 
CREATE TABLE [Compania].[Informacion]
(
    [Id] INT IDENTITY(1,1),
    [RazonSocial] VARCHAR(51) NOT NULL,
    [NombreComercial] VARCHAR(51) NOT NULL,
    [Alias] VARCHAR(51) NOT NULL,
    [RNC] INT NOT NULL,
    [EstaActiva] BIT DEFAULT(1),
    [Direccion] VARCHAR(201),
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_RNC UNIQUE(RNC),
    CONSTRAINT UNIQ_ALIAS UNIQUE(Alias),
    CONSTRAINT PK_InfoCompany_ID PRIMARY KEY (Id)
)
GO

-- ACTIVO
CREATE TABLE [Inventario].[Activo]
(
    [Id] INT IDENTITY(1,1),
    [IdInformacion] INT,
    [IdDepartamento] INT,
    [IdUnidad] INT,
    [IdLocalidad] INT,
    [IdActivoTipoCategoria] INT,
    [IdCodigo] BIGINT,
    [IdCondicion] INT DEFAULT(1) NULL,
    [Marca] VARCHAR(100) NULL,
    [Color] VARCHAR(100) NULL,
    [Modelo] VARCHAR(100) NULL,
    [Componentes] VARCHAR(500) NULL,
    [Serial] VARCHAR(100) NULL,
    [Asignado] VARCHAR(500),
    [Observaciones] VARCHAR(500),
    CONSTRAINT PK_Activo_ID PRIMARY KEY (Id)
)

CREATE TABLE Inventario.Condicion
(
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(100),
    CONSTRAINT PK_Condicion_ID PRIMARY KEY(Id)
)


-- Historial Inventarios
CREATE TABLE [Inventario].[Inventario]
(
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(300),
    Observaciones VARCHAR(500),
    FechaCreacion DATETIME DEFAULT (GETDATE()),
    CONSTRAINT PK_Inventario_ID PRIMARY KEY (Id),
)  
GO

CREATE TABLE Inventario.InventarioActivo
(
    IdActivo INT NOT NULL,
    IdInventario INT NOT NULL,
    CONSTRAINT PK_InventarioActivo_ID PRIMARY KEY (IdActivo,IdInventario),
)

-- DEPARTAMENTO
CREATE TABLE [Compania].[Departamento]
(
    [Id] INT IDENTITY(1,1),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT PK_Departamento_ID PRIMARY KEY (Id),
    CONSTRAINT UNIQ_NombreDepartamento UNIQUE(Nombre)
)
GO

-- UNIDAD
CREATE TABLE [Compania].[Unidad]
(
    [Id] INT IDENTITY(1,1),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_NombreUnidad UNIQUE(Nombre),
    CONSTRAINT PK_Unidad_ID PRIMARY KEY (Id)
)
GO

-- Localidad
CREATE TABLE [Compania].[Localidad]
(
    [Id] INT IDENTITY(1,1),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_NombreLocalidad UNIQUE(Nombre),
    CONSTRAINT PK_Localidad_ID PRIMARY KEY (Id)
)
GO


-- TABLE ActivoTipo
CREATE TABLE [Inventario].[ActivoTipo]
(
    [Id] INT IDENTITY(1,1),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_NombreActivoTipo UNIQUE(Nombre),
    CONSTRAINT PK_ActivoTipo_ID PRIMARY KEY(Id),
)
GO



CREATE TABLE [Inventario].[ActivoTipoCategoria]
(
    [Id] INT IDENTITY(1,1),
    [IdActivoTipo] INT,
    [Nombre] VARCHAR(500),
    CONSTRAINT UNIQ_NombreActivoTipoCategoria UNIQUE(Nombre),
    CONSTRAINT PK_ActivoTipoCategoria_ID PRIMARY KEY(Id)
)

CREATE TABLE Autenticacion.Usuario
(
    Id INT IDENTITY(1,1),
    email VARCHAR(50),
    Contrasena VARCHAR(20),
    FechaExpiracion DATETIME NOT NULL,
    FechaCreacion DATETIME NOT NULL DEFAULT(GETDATE()),
    EstaActivo BIT,
    Alias VARCHAR(50),
    IdEmpleado INT,
)


--  RELACIONES
ALTER TABLE  [Inventario].[InventarioActivo]
ADD
	CONSTRAINT FK_Inventario_ID FOREIGN KEY (IdInventario) REFERENCES [Inventario].[Inventario](Id),
	CONSTRAINT FK_ActivoID_ID FOREIGN KEY (IdActivo) REFERENCES [Inventario].[Activo](Id)
GO
-- Activo
ALTER TABLE  [Inventario].[Activo]
ADD 
	CONSTRAINT FK_Informacion_ID FOREIGN KEY (IdInformacion) REFERENCES [Compania].[Informacion](Id),
	CONSTRAINT FK_Departamento_ID FOREIGN KEY (IdDepartamento) REFERENCES [Compania].[Departamento](Id),
	CONSTRAINT FK_Unidad_ID FOREIGN KEY (IdUnidad) REFERENCES [Compania].[Unidad](Id),
	CONSTRAINT FK_Localidad_ID FOREIGN KEY (IdLocalidad) REFERENCES [Compania].[Localidad](Id),
	CONSTRAINT FK_ActivoTipoCategoria_ID FOREIGN KEY (IdActivoTipoCategoria) REFERENCES [Inventario].[ActivoTipoCategoria](Id),
    CONSTRAINT FK_Condicion_ID FOREIGN KEY (IdCondicion) REFERENCES [Inventario].[Condicion](Id)
GO

ALTER TABLE [Inventario].[ActivoTipoCategoria]
    ADD CONSTRAINT FK_ActivoTipoCategoriaID FOREIGN KEY (IdActivoTipo) REFERENCES [Inventario].[ActivoTipo](Id)


/*          SEED         */
USE SWF;
--    COMANIAS
INSERT INTO Compania.Informacion
    (
    [RazonSocial],
    [NombreComercial],
    [Alias],
    [RNC]
    )
VALUES
    (
        'Finacial Medical Services FIMED SA',
        'Finacial Medical Services FIMED',
        'Fimed',
        131058434           
    ),
    (
        'Gold Hand Holding SRL',
        'Gold Hand Holding',
        'Easynet',
        131667244             
    ),
    (
        'Tenedora Xavilone SAS',
        'Tenedora Xavilone',
        'Alma Ata',
        130390861             
    ),
    (
        'Distribucion OC Team SRL',
        'Distribucion OC Team',
        'EasyCall',
        130731624             
    );
GO
-- Departamentos
INSERT INTO Compania.Departamento
    (
    [Nombre]
    )
VALUES
    ('Gerencia General'),
    ('Gerencia Comercial'),
    ('Gerencia de Contabilidad'),
    ('Gerencia de Operaciones y Adm de Activos')
GO

-- Unidad
INSERT INTO Compania.Unidad
    (
    [Nombre]
    )
VALUES
    ('NA'),
    ('Canal B2B'),
    ('Canal B2C'),
    ('Almacén Pricipal'),
    ('Mensajería y Delivery')
GO


-- Localidad
INSERT INTO Compania.Localidad
    (
    [Nombre]
    )
VALUES
    ('San Martín'),
    ('Bonao'),
    ('El Café'),
    ('Independencia'),
    ('La Caleta'),
    ('Coral Mall'),
    ('Downtown Punta Cana'),
    ('El Seibo'),
    ('Engombe'),
    ('Altagracia El Laurel'),
    ('Friusa Plaza Larimar'),
    ('Verón Center'),
    ('Los Guaricanos'),
    ('Hato Mayor'),
    ('Iberia Hato Mayor'),
    ('Invivienda'),
    ('La Rosario Villa Francisca'),
    ('La Sirena Multiplaza Higüey'),
    ('Los Alcarrizos'),
    ('Miches'),
    ('Plaza Lama Ovando'),
    ('Plaza Lama La Romana'),
    ('Sabana De La Mar'),
    ('Sambil Acuario'),
    ('Sambil Galería'),
    ('San Martín Tienda'),
    ('Higüey La Otra Banda'),
    ('Bella Terra Santiago'),
    ('Plaza Haché'),
    ('Barletta')
GO

-- ActivoTipo (Categorias)
INSERT INTO Inventario.ActivoTipo
    (
    [Nombre]
    )
VALUES
    ('Terreno'),
    ('Edificación'),
    ('Mobiliario'),
    ('Equipos de oficina, eléctricos y otros'),
    ('Equipo de transporte'),
    ('Equipos de Tecnología y Comunicación')
GO

INSERT INTO Inventario.ActivoTipoCategoria
    (
    IdActivoTipo,
    Nombre
    )
VALUES
    (1, 'Urbano'),
    (1, 'Rural'),
    (2, 'N/A'),
    (3, 'Escritorio sencillo'),
    (3, 'Escritorio sencillo con gavetero integrado'),
    (3, 'Escritorio en L'),
    (3, 'Escritorio en L con gavetero integrado'),
    (3, 'Credenza'),
    (3, 'Mesa redonda de cocina'),
    (3, 'Mesa redonda de reuniones'),
    (3, 'Mesa cuadrada de cocina'),
    (3, 'Mesa rectangular de reuniones'),
    (3, 'Estantería'),
    (3, 'Silla secretarial'),
    (3, 'Silla secretarial con brazos'),
    (3, 'Silla de visitante individual'),
    (3, 'Silla de visitante individual con brazos'),
    (3, 'Silla de visitante rack de 3'),
    (3, 'Silla de visitante rack de 4'),
    (3, 'Silla ejecutiva'),
    (3, 'Sofá de 2 puestos'),
    (3, 'Sofá de 3 puestos'),
    (3, 'Archivador de 2 gavetas'),
    (3, 'Archivador de 3 gavetas'),
    (3, 'Archivador contra incendio de 3 gavetas'),
    (3, 'Archivador contra incendio de 4 gavetas'),
    (3, 'Counter de recepción'),
    (3, 'Counter de venta'),
    (3, 'Exhibidor'),
    (3, 'Mobiliario de kitchinette'),
    (3, 'Biblioteca'),
    (3, 'Mampara de acrílico para escritorio'),
    (3, 'Mampara de vidrio para escritorio'),
    (3, 'Mampara de madera tapizada para escritorio'),
    (3, 'Mampara de madera tapizada para estaciones de trabajo'),
    (3, 'Letrero lumínico'),
    (3, 'Exibidores  pequeños'),
    (3, 'Exibidores grande'),
    (3, 'Sillas Plasticas'),
    (3, 'Archivos de Pared'),
    (3, 'Bitrina de cristal '),
    (3, 'Cuadros sin enmarcar'),
    (3, 'Cuadros enmarcado'),
    (3, 'Pizarra transparente'),
    (3, 'Pizarra Blanca'),
    (3, 'Pódium'),
    --4
    (4, 'Trituradora'),
    (4, 'Sumadora'),
    (4, 'Máquina de escribir'),
    (4, 'Televisor 32"'),
    (4, 'Televisor 42"'),
    (4, 'Televisor 43"'),
    (4, 'Televisor 50"'),
    (4, 'Televisor 55"'),
    (4, 'Inversor'),
    (4, 'Planta eléctrica'),
    (4, 'Abanico de pedestal'),
    (4, 'Abanico de techo de 4 paletas'),
    (4, 'Abanico de techo de 3 paletas'),
    (4, 'Extintor'),
    (4, 'Armario Rack 6 U'),
    (4, 'Armario Rack 8 U'),
    (4, 'Armario Rack 42 U'),
    (4, 'Armario Rack 20 U'),
    (4, 'Lámpara de techo'),
    (4, 'Nevera'),
    (4, 'Bebedero'),
    (4, 'Aire Central '),
    (4, 'Compresor de aire'),
    (4, 'Logo'),
    --5
    (5, 'Vehiculos livianos'),
    (5, 'Vehiculos de carga'),
    (5, 'Motor'),
    -- 6+
    (6, 'Tablet'),
    (6, 'Tablet para firma digital'),
    (6, 'IPad'),
    (6, 'Laptop'),
    (6, 'Monitor 13"'),
    (6, 'Monitor 14"'),
    (6, 'Monitor 15"'),
    (6, 'Monitor 16"'),
    (6, 'Monitor 17"'),
    (6, 'Monitor 18"'),
    (6, 'Monitor 19"'),
    (6, 'Monitor 20"'),
    (6, 'Monitor 21"'),
    (6, 'Monitor 22"'),
    (6, 'Teclado cableado en inglés'),
    (6, 'Teclado en español'),
    (6, 'Mouse cableado'),
    (6, 'Mouse inalámbrico'),
    (6, 'Desktop'),
    (6, 'Servidor'),
    (6, 'Impresora térmica'),
    (6, 'Impresora multifuncional'),
    (6, 'Impresora matricial'),
    (6, 'Central telefónica análoga'),
    (6, 'Central telefónica digital VoIP'),
    (6, 'Teléfono análogo'),
    (6, 'Teléfono Digital VoIP'),
    (6, 'Handset'),
    (6, 'Teléfono celular Smart'),
    (6, 'Teléfono celular Simple'),
    (6, 'Repetidores de señales'),
    (6, 'UPS'),
    (6, 'Sistema de alarma (inlcuye panel)'),
    (6, 'Sistema de CCTV DVR'),
    (6, 'Sistema de CCTV Cámar')


INSERT INTO Inventario.Condicion
    (
    Nombre
    )
VALUES
    ('Buen estado'),
    ('Deteriorado'),
    ('Fuera de servicio')


INSERT INTO Inventario.Activo
    (
    IdInformacion,
    IdDepartamento,
    IdUnidad,
    IdLocalidad,
    IdActivoTipoCategoria,
    Marca,
    Color,
    Modelo,
    Componentes,
    Serial,
    IdCondicion
    )
VALUES
    (
        1,
        1,
        1,
        1,
        2,
        'Hp',
        'Negro',
        'GTX 4080',
        'Mouse Teclado cornetas',
        'A4D4R447G5R845',
        1
),
    (
        1,
        1,
        1,
        2,
        2,
        'Hp',
        'Negro',
        'GTX 4080',
        'Mouse Teclado cornetas',
        'A4D4R447G5R845',
        1
),
    (
        1,
        1,
        1,
        1,
        2,
        'Hp',
        'Negro',
        'GTX 4080',
        'Mouse Teclado cornetas',
        'A4D4R447G5R845',
        1
),
    (
        1,
        1,
        1,
        1,
        2,
        'Hp',
        'Negro',
        'GTX 4080',
        'Mouse Teclado cornetas',
        'A4D4R447G5R845',
        1
),
    (
        1,
        1,
        1,
        1,
        2,
        'Hp',
        'Negro',
        'GTX 4080',
        'Mouse Teclado cornetas',
        'A4D4R447G5R845',
        1
)
GO

-- VIEW
CREATE VIEW ViewActivo
AS
    SELECT id, IdCodigo
    FROM Inventario.Activo
GO

