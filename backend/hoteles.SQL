USE master;
GO
DROP DATABASE [3];
GO

CREATE DATABASE [3];
GO

USE [3];
GO

-- CREAR ESQUEMAS
CREATE SCHEMA Compania;
GO
CREATE SCHEMA Inventario;
GO
CREATE SCHEMA Autenticacion;
GO

-- TABLAS
CREATE TABLE Inventario.Stock (
    Id INT IDENTITY(1,1),
    IdInformacion INT,
    IdActivo INT DEFAULT(0),
    total_activos INT DEFAULT(0)
);

CREATE TABLE Compania.Informacion (
    Id INT IDENTITY(1,1),
    RazonSocial VARCHAR(51) NOT NULL,
    NombreComercial VARCHAR(51) NOT NULL,
    Alias VARCHAR(51) NOT NULL,
    RNC INT NOT NULL,
    EstaActiva BIT DEFAULT(1),
    Direccion VARCHAR(201),
    FechaCreacion DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_RNC UNIQUE(RNC),
    CONSTRAINT UNIQ_ALIAS UNIQUE(Alias),
    CONSTRAINT PK_InfoCompany_ID PRIMARY KEY (Id)
);

CREATE TABLE Inventario.Activo (
    Id INT IDENTITY(1,1),
    IdInformacion INT,
    IdDepartamento INT,
    IdLocalidad INT,
    IdActivoTipoCategoria INT,
    IdCodigo VARCHAR(100),
    IdArea INT,
    Marca VARCHAR(100) NULL,
    Color VARCHAR(100) NULL,
    Modelo VARCHAR(100) NULL,
    Componentes VARCHAR(500) NULL,
    Serial VARCHAR(100) NULL,
    IdCondicion INT NULL,
    Observaciones VARCHAR(500),
    CONSTRAINT PK_Activo_ID PRIMARY KEY (Id)
);

CREATE TABLE Inventario.Area (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NULL
    CONSTRAINT UNIQ_Area UNIQUE(Nombre)
);

CREATE TABLE Inventario.Inventario (
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(300),
    Observaciones VARCHAR(500),
    FechaCreacion DATETIME DEFAULT (GETDATE()),
    CONSTRAINT PK_Inventario_ID PRIMARY KEY (Id)
);

CREATE TABLE Inventario.InventarioActivo (
    IdActivo INT NOT NULL,
    IdInventario INT NOT NULL,
    CONSTRAINT PK_InventarioActivo_ID PRIMARY KEY (IdActivo, IdInventario)
);

CREATE TABLE Compania.Departamento (
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(101) NOT NULL,
    FechaCreacion DATETIME DEFAULT (GETDATE()),
    CONSTRAINT PK_Departamento_ID PRIMARY KEY (Id),
    CONSTRAINT UNIQ_NombreDepartamento UNIQUE(Nombre)
);

CREATE TABLE Compania.Localidad (
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(101) NOT NULL,
    FechaCreacion DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_NombreLocalidad UNIQUE(Nombre),
    CONSTRAINT PK_Localidad_ID PRIMARY KEY (Id)
);

CREATE TABLE Inventario.ActivoTipo (
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(101) NOT NULL,
    FechaCreacion DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_NombreActivoTipo UNIQUE(Nombre),
    CONSTRAINT PK_ActivoTipo_ID PRIMARY KEY (Id)
);

CREATE TABLE Inventario.ActivoTipoCategoria (
    Id INT IDENTITY(1,1),
    IdActivoTipo INT,
    Nombre VARCHAR(500),
    CONSTRAINT PK_ActivoTipoCategoria_ID PRIMARY KEY (Id)
);

CREATE TABLE Autenticacion.Usuario (
    Id INT IDENTITY(1,1),
    Email VARCHAR(50),
    Contrasena VARCHAR(20),
    FechaExpiracion DATETIME NOT NULL,
    FechaCreacion DATETIME NOT NULL DEFAULT (GETDATE()),
    EstaActivo BIT,
    Alias VARCHAR(50),
    IdEmpleado INT
);

CREATE TABLE Inventario.Condicion (
    Id INT IDENTITY(1,1),
    Nombre VARCHAR(100),
    CONSTRAINT PK_Condicion_ID PRIMARY KEY (Id)
);

-- RELACIONES
ALTER TABLE Inventario.InventarioActivo
ADD CONSTRAINT FK_Inventario_ID FOREIGN KEY (IdInventario) REFERENCES Inventario.Inventario(Id),
    CONSTRAINT FK_ActivoID_ID FOREIGN KEY (IdActivo) REFERENCES Inventario.Activo(Id);

ALTER TABLE Inventario.Activo
ADD CONSTRAINT FK_Informacion_ID FOREIGN KEY (IdInformacion) REFERENCES Compania.Informacion(Id),
    CONSTRAINT FK_Departamento_ID FOREIGN KEY (IdDepartamento) REFERENCES Compania.Departamento(Id),
    CONSTRAINT FK_Localidad_ID FOREIGN KEY (IdLocalidad) REFERENCES Compania.Localidad(Id),
    CONSTRAINT FK_ActivoTipoCategoria_ID FOREIGN KEY (IdActivoTipoCategoria) REFERENCES Inventario.ActivoTipoCategoria(Id),
    CONSTRAINT FK_Condicion_ID FOREIGN KEY (IdCondicion) REFERENCES Inventario.Condicion(Id),
    CONSTRAINT FK_Area_ID FOREIGN KEY (IdArea) REFERENCES Inventario.Area(Id);

ALTER TABLE Inventario.ActivoTipoCategoria
ADD CONSTRAINT FK_ActivoTipoCategoriaID FOREIGN KEY (IdActivoTipo) REFERENCES Inventario.ActivoTipo(Id);

-- SEED DATA
INSERT INTO Compania.Localidad (Nombre) VALUES
('Torre'),
('Exterior de la Torre'),
('The Tropical'),
('Crown & Residences Suites'),
('Presidential Suites'),
('Cofresi Palm Beach'),
('The Monarch(Casino)'),
('VIP-Pool'),
('VIP Beach'),
('Harmony Beach'),
('LV Beach'),
('Deja view'),
('SeaLaVie Beach'),
('Aquarrela - Ocean World');

INSERT INTO Compania.Departamento (Nombre) VALUES
('Administración 1'),
('Administración 2'),
('Administración (Oficina Gerencial)'),
('Administración (Sra. Anja Holland)'),
('Finanzas 1'),
('Finanzas 2'),
('Finanzas 3 (Area de caja)'),
('Legal'),
('Recurso Humano'),
('Contabilidad (Frente a RH)'),
('Tecnologia 1'),
('Tecnologia 2'),
('Tecnologia Servidores 1'),
('Tecnologia Servidores 2'),
('Cocina 1'),
('Cocina 2'),
('Servicio al cliente'),
('Archivo'),
('Taller de mantenimiento'),
('Salon de conferencia'),
('Recepción'),
('Terraza'),
('Golf Kart Center'),
('Oficina de Costos'),
('Oficina de Bares'),
('Oficina presidential'),
('Cafeteria Vienna'),
('Oficina Chairmans Circle'),
('Anjas Lounge'),
('Oficina de Reservas'),
('Sala de ventas'),
('Restaurante Azul'),
('Oficina de Staff'),
('Areas VIP'),
('Baños'),
('VIP Services'),
('Almacen'),
('Oficina de CEO');

INSERT INTO Inventario.Area (Nombre) VALUES
('1er Piso'),
('2do Piso'),
('3er Piso'),
('4to Piso'),
('Restaurante/Cafeteria'),
('Bar'),
('Heladeria'),
('Playa'),
('Salon'),
('Oficina'),
('Exterior de la Torre');

INSERT INTO Inventario.ActivoTipo (Nombre) VALUES
('Mobiliario & Equipos de oficina'),
('Muebles & enseres (Cat III)'),
('Maquinarias y Equipos (cat III)'),
('Vehiculos'),
('Equipos Computos'),
('Otros');

INSERT INTO Inventario.ActivoTipoCategoria (IdActivoTipo, Nombre) VALUES
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
(2, 'Balinesas'),
(2, 'Balinesas dobles'),
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
(3, 'Frezer'),
(3, 'Lavavajillas'),
(3, 'Exhibidores de comida'),
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
(3, 'Telefonos'),
(3, 'Taladro'),
(3, 'Secadora de manos'),
(3, 'Vitrina'),
-- Categories for ActivoTipo 4
(4, 'Vehiculos Livianos'),
(4, 'Vehiculos Pesados'),
-- Categories for ActivoTipo 5
(5, 'Laptop'),
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

INSERT INTO Inventario.Condicion
    (
    Nombre
    )
VALUES
    ('Buen estado'),
    ('Deteriorado'),
    ('Fuera de servicio')
GO


INSERT INTO Compania.Informacion (RazonSocial, NombreComercial, Alias, RNC, Direccion)
VALUES ('Hotel', 'Hotel', 'Hotel', 123456789, 'Hotel');

DBCC CHECKIDENT ('Inventario.Activo', RESEED, 1000);