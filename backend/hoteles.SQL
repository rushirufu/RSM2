USE master
go
DROP DATABASE [2]
GO

--SELECT TABASE

CREATE DATABASE [2]
GO

USE [db_aae172_inventariorsmrd]
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
    [IdCodigo] VARCHAR(100),
	[IdArea] INT,
    [Marca] VARCHAR(100) NULL,
    [Color] VARCHAR(100) NULL,
    [Modelo] VARCHAR(100) NULL,
    [Componentes] VARCHAR(500) NULL,
    [Serial] VARCHAR(100) NULL,
    [IdCondicion] INT NULL,
    [Observaciones] VARCHAR(500),
    CONSTRAINT PK_Activo_ID PRIMARY KEY (Id)
)

-- TABLE Areas 
CREATE TABLE Inventario.Area
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) null
	CONSTRAINT UNIQ_Area UNIQUE(Nombre),
);
go


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
    -- CONSTRAINT UNIQ_NombreActivoTipoCategoria UNIQUE(Nombre),
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
    CONSTRAINT FK_Condicion_ID FOREIGN KEY (IdCondicion) REFERENCES [Inventario].[Condicion](Id),
	CONSTRAINT FK_Area_ID FOREIGN KEY (IdArea) REFERENCES [Inventario].[Area](Id)
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
        'Empresa A',
        'Empresa A',
        'Empresa A',
        1234           
    )
GO
-- Departamentos
INSERT INTO Compania.Departamento
    ([Nombre])
VALUES
    ('Administración 1'),
    ('Administración 2'),
    ('Administración (Gerencia)'),
    ('Administración (Sra. Anja Holland)'),
    ('Finanzas 1'),
    ('Finanzas 2'),
    ('Finanzas 3 (Area de caja)'),
    ('Legal'),
    ('Recurso Humano'),
    ('Tecnologia 1'),
    ('Tecnologia 2'),
    ('Tecnologia Servidores 1'),
    ('Tecnologia Servidores 2'),
    ('Cocina 1'),
    ('Cocina 2'),
    ('Servicio al cliente'),
    ('Archivo'),
    ('Mantenimiento'),
    ('Almacen'),
    ('Salon de conferencia'),
    ('Recepción'),
    ('Terraza');
GO

INSERT INTO Compania.Localidad
    ([Nombre])
VALUES
    ('Torre'),
    ('The Tropical'),
    ('Crown & Residences Suites'),
    ('Presidential Suites'),
    ('Cofresi Palm Beach'),
    ('VIP-Pool'),
    ('Cafeteria Vienna'),
    ('VIP Beach'),
    ('Harmony Beach'),
    ('LV Beach'),
    ('Deja view'),
    ('SeaLaVie Beach'),
    ('Aquarrela - Ocean World');
GO



-- ActivoTipo (Categorias)
INSERT INTO Inventario.ActivoTipo
    ([Nombre])
VALUES
    ('Mobiliario & Equipos de oficina'),
    ('Muebles & enseres (Cat III)'),
    ('Maquinarias y Equipos (Cat III)'),
    ('Vehiculos'),
    ('Equipos Computos'),
    ('Otros');

GO


INSERT INTO Inventario.ActivoTipoCategoria
    ([IdActivoTipo], [Nombre])
VALUES
    -- Categories for ActivoTipo 1
    (1, 'Escritorio'),
    (1, 'Sillas de escritorio'),
    (1, 'Otras sillas'),
    (1, 'Mesas de reunión'),
    (1, 'Otras mesas'),
    (1, 'Credenza'),
    (1, 'Archivos grandes'),
    (1, 'Archivos pequeños'),
    (1, 'Sistemas modulares'),
    (1, 'Sillon ejecutivo'),
    (1, 'Sofa'),
    (1, 'Stand'),
    (1, 'Counter'),
    (1, 'Lockers'),
    (1, 'Armarios'),
    
    -- Categories for ActivoTipo 2
    (2, 'Butacas'),
    (2, 'Hamaca'),
    (2, 'Camarotes'),
    (2, 'Sillas de comedor'),
    (2, 'Otras sillas'),
    (2, 'Taburetes'),
    (2, 'Trameria'),
    
    -- Categories for ActivoTipo 3
    (3, 'Televisor'),
    (3, 'Aire acondicionado'),
    (3, 'Abanico techo'),
    (3, 'Abanico de pared'),
    (3, 'Asador'),
    (3, 'Aspiradora'),
    (3, 'Bebedero'),
    (3, 'Bocinas'),
    (3, 'Bombas'),
    (3, 'Botelleros'),
    (3, 'Blower industrial'),
    (3, 'Cafetera'),
    (3, 'Camillas'),
    (3, 'Compresor de aire'),
    (3, 'Condensador de aire'),
    (3, 'Consola PlayStation'),
    (3, 'Controlador DJ'),
    (3, 'Cortagrama'),
    (3, 'Cortinas'),
    (3, 'Deposito de Hielo'),
    (3, 'Deshumificador'),
    (3, 'Dispensadores de queso'),
    (3, 'Drone'),
    (3, 'Elemento decorativo'),
    (3, 'Equipos de cocina'),
    (3, 'Telefonos'),
    (3, 'Taladro'),
    (3, 'Secadora de manos'),
    (3, 'Vitrina'),
    
    -- Categories for ActivoTipo 4
    (4, 'Vehiculos Livianos'),
    (4, 'Vehiculos Pesados'),
    
    -- Categories for ActivoTipo 5
    (5, 'Laptop'),
    (5, 'Computadora de Escritorio'),
    (5, 'Impresora'),
    (5, 'Modem'),
    (5, 'Ipad'),
    (5, 'Disco duro'),
    (5, 'UPS'),
    (5, 'Servidor'),
    (5, 'Docking Station'),
    (5, 'Trituradora'),
    (5, 'CPU'),
    (5, 'Monitor'),
    (5, 'Repetidor'),
    (5, 'Sistema de Seguridad de cámaras'),
    (5, 'Sistema de seguridad de alarmas'),
    (5, 'Pantalla tactil'),
    
    -- Category for ActivoTipo 6
    (6, 'Otros');

GO


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
GO


INSERT INTO Inventario.Area
    ([Nombre])
VALUES
    ('1er Piso'),
    ('2do Piso'),
    ('3er Piso'),
    ('Restaurante'),
    ('Bar'),
    ('Playa'),
    ('Venta de excursiones'),
    ('Baños'),
    ('Oficina VIP');
GO







