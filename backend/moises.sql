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
    [IdLocalidad] INT,
    [IdActivoTipoCategoria] INT,
    [IdCodigo] BIGINT,
    [Marca] VARCHAR(100) NULL,
    [Color] VARCHAR(100) NULL,
    [Modelo] VARCHAR(100) NULL,
    [Componentes] VARCHAR(500) NULL,
    [Serial] VARCHAR(100) NULL,
    [IdCondicion] INT NULL,
    [Observaciones] VARCHAR(500),
    CONSTRAINT PK_Activo_ID PRIMARY KEY (Id)
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


CREATE TABLE Inventario.Condicion
(
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(100),
    CONSTRAINT PK_Condicion_ID PRIMARY KEY(Id)
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
	CONSTRAINT FK_Localidad_ID FOREIGN KEY (IdLocalidad) REFERENCES [Compania].[Localidad](Id),
	CONSTRAINT FK_ActivoTipoCategoria_ID FOREIGN KEY (IdActivoTipoCategoria) REFERENCES [Inventario].[ActivoTipoCategoria](Id),
    CONSTRAINT FK_Condicion_ID FOREIGN KEY (IdCondicion) REFERENCES [Inventario].[Condicion](Id)
GO

ALTER TABLE [Inventario].[ActivoTipoCategoria]
    ADD CONSTRAINT FK_ActivoTipoCategoriaID FOREIGN KEY (IdActivoTipo) REFERENCES [Inventario].[ActivoTipo](Id)


/*          SEED         */
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
        'Genericos del Caribe',
        'Genericos del Caribe',
        'Genericos del Caribe',
        1234           
    ),
    (
        'Importadora Nicadom',
        'Importadora Nicadom',
        'Importadora Nicadom',
        12345             
    ),
    (
        'Iberomuebles del Mar',
        'Iberomuebles del Mar',
        'Iberomuebles del Mar',
        12346             
    )
GO
-- Departamentos
INSERT INTO Compania.Departamento
    (
    [Nombre]
    )
VALUES
    ('Administración'),
    ('Finanzas'),
    ('Cuentas por cobrar'),
    ('Mercadeo/ventas'),
    ('Gestión Humana'),
    ('Tecnologia'),
    ('Coordinador de obras'),
    ('Desarrollo de productos'),
    ('Producción'),
    ('Diseño y Repuesto'),
    ('Transportarción'),
    ('Almacen y Despacho'),
    ('Mantenimiento'),
    ('Logistica y desarrollo'),
    ('Servicio al cliente'),
    ('Departamento Juridico'),
    ('Compras')
GO

-- -- Unidad
-- INSERT INTO Compania.Unidad
--     (
--     [Nombre]
--     )
-- VALUES
--     ('NA'),
--     ('Canal B2B'),
--     ('Canal B2C'),
--     ('Almacén Pricipal'),
--     ('Mensajería y Delivery')
-- GO


-- Localidad
INSERT INTO Compania.Localidad
    (
    [Nombre]
    )
VALUES
    ('Santo Domingo Alma Rosa'),
    ('Santo Domingo Las Americas'),
    ('Santo Domingo Metropolitano'),
    ('Santiago'),
    ('Bavaro Veron'),
    ('Punta Cana')
GO



-- ActivoTipo (Categorias)
INSERT INTO Inventario.ActivoTipo
    (
    [Nombre]
    )
VALUES
    --1
    ('Terreno'),
    --2
    ('Edificación'),
    --3
    ('Mobiliario y Equipos'),
    --4
    ('Equipos de Transporte'),
    --5
    ('Equipos Tecnológicos'),
    --6
    ('Otros Mobiliarios y Equipos'),
    --7
    ('Herramientas'),
    --8
    ('Maquinarias y Equipos'),
    --9
    ('Otros Mobiliarios y Equipos')
GO

INSERT INTO Inventario.ActivoTipoCategoria
    (
    [IdActivoTipo],
    [Nombre]
    )
VALUES
    (1, 'Urbano'),
    (1, 'Rural'),
    (2, 'N/A'),
    (3, 'Escritorio'),
    (3, 'Estantes'),
    (3, 'Sillas de Escritorio'),
    (3, 'Sillas Colectivas'),
    (3, 'Credenza'),
    (3, 'Archivo'),
    (3, 'Counters'),
    (3, 'Bancadas'),
    (3, 'Gabinetes'),
    (3, 'Sillon ejecutivo'),
    (3, 'Librero'),
    (3, 'sumadora'),
    (3, 'Sillas corredizas'),
    (3, 'Mesa'),
    (4, 'Vehiculos Livianos '),
    (4, 'Vehiculos Pesados'),
    (5, 'Laptops'),
    (5, 'Computadora de Escritorio'),
    (5, 'Handheld'),
    (5, 'Servidores'),
    (5, 'Televisores'),
    (5, 'Telefono'),
    (5, 'Teclado'),
    (5, 'UPS'),
    (5, 'CPU'),
    (5, 'Impresora'),
    (5, 'Copiadora'),
    (5, 'Modem'),
    (6, 'Sistema de Seguridad'),
    (6, 'Sistema de seguridad de alarmas'),
    (7, 'Envases de Pintura'),
    (7, 'Martillo'),
    (7, 'Clavos'),
    (7, 'Grapas'),
    (7, 'Taladros'),
    (7, 'Lijas '),
    (7, 'Cola blanca/cola de carpintero'),
    (7, 'Tornillos'),
    (8, 'Maquina Mezcladora'),
    (8, 'Maquina de Dispersion'),
    (8, 'Maquina Molienda'),
    (8, 'Maquina de Envasar'),
    (8, 'Aire Acondicionado'),
    (8, 'Sierra Electrica'),
    (8, 'Maquina de cortar madera'),
    (8, 'Maquina para lijar/limar'),
    (8, 'Maquina para pintar'),
    (8, 'Sepillo 4 caras moldeador'),
    (8, 'Escuadrar'),
    (8, 'Maquina de Adictivo'),
    (9, 'Extintores'),
    (9, 'Planta Electrica'),
    (9, 'Telas'),
    (9, 'Abanicos')
go


-- INSERT INTO Inventario.Activo
--     (
--     IdInformacion,
--     IdDepartamento,
--     IdUnidad,
--     IdLocalidad,
--     IdActivoTipoCategoria,
--     Marca,
--     Color,
--     Modelo,
--     Componentes,
--     Serial,
--     Condicion
--     )
-- VALUES
--     (
--         1,
--         1,
--         1,
--         1,
--         2,
--         'Hp',
--         'Negro',
--         'GTX 4080',
--         'Mouse Teclado cornetas',
--         'A4D4R447G5R845',
--         1
-- ),
--     (
--         1,
--         1,
--         1,
--         2,
--         2,
--         'Hp',
--         'Negro',
--         'GTX 4080',
--         'Mouse Teclado cornetas',
--         'A4D4R447G5R845',
--         1
-- ),
--     (
--         1,
--         1,
--         1,
--         1,
--         2,
--         'Hp',
--         'Negro',
--         'GTX 4080',
--         'Mouse Teclado cornetas',
--         'A4D4R447G5R845',
--         1
-- ),
--     (
--         1,
--         1,
--         1,
--         1,
--         2,
--         'Hp',
--         'Negro',
--         'GTX 4080',
--         'Mouse Teclado cornetas',
--         'A4D4R447G5R845',
--         1
-- ),
--     (
--         1,
--         1,
--         1,
--         1,
--         2,
--         'Hp',
--         'Negro',
--         'GTX 4080',
--         'Mouse Teclado cornetas',
--         'A4D4R447G5R845',
--         1
-- )
-- GO

-- VIEW
CREATE VIEW ViewActivo
AS
    SELECT id, IdCodigo
    FROM Inventario.Activo a 
GO


INSERT INTO Inventario.Condicion
    (
    Nombre
    )
VALUES
    ('Buen estado'),
    ('Deteriorado'),
    ('Fuera de servicio')

