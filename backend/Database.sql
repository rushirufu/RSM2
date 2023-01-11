USE master
GO

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

-- TABLE Companias 
CREATE TABLE [Compania].[InfoCompania]
(
    [Id] INT IDENTITY(1,1),
    [RazonSocial] VARCHAR(51) NOT NULL,
    [NombreComercial] VARCHAR(51) NOT NULL,
    [Alias] VARCHAR(51) NOT NULL,
    [RNC] INT NOT NULL,
    [EstaActiva] BIT DEFAULT(1),
    [Direccion] VARCHAR(201),
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT UNIQ_Alias UNIQUE(RNC),
    CONSTRAINT PK_InfoCompany_ID PRIMARY KEY (id)
)
GO

-- ACTIVO
CREATE TABLE [Inventario].[Activo]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Marca] VARCHAR(100) NULL,
    [Color] VARCHAR(100) NULL,
    [Modelo] VARCHAR(100) NULL,
    [Componentes] VARCHAR(100) NULL,
    [Serial] VARCHAR(100) NULL,
    [Condicion] BIT DEFAULT(1) NULL,
    [Observaciones] VARCHAR(400),
    [UsuarioID] [INT],
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT PK_Activo_ID PRIMARY KEY (id)
)



-- TABLE Inventarios
CREATE TABLE [Inventario].[Historial]
(
    [Id] INT IDENTITY(1,1),
    [IdInfoCompania] INT,
    [IdActivo] INT,
    [IdEmpleado] INT,
    [Nombre] VARCHAR(300),
    [Observaciones] VARCHAR(500),
    [FechaCreacion] DATETIME DEFAULT (GETDATE()),
    CONSTRAINT PK_Historial_ID PRIMARY KEY (id),
    CONSTRAINT FK_InfoCompania_ID FOREIGN KEY (IdInfoCompania) REFERENCES [Compania].[InfoCompania](Id),
    CONSTRAINT FK_Activo_Activo_ID FOREIGN KEY (IdActivo) REFERENCES [Inventario].[Activo] (Id)
)  
GO

-- TABLE DEPARTAMENT
CREATE TABLE [Compania].[Departamento]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO

-- TABLE Unidad
CREATE TABLE [Compania].[Unidad]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO

-- TABLE Localidad
CREATE TABLE [Compania].[Localidad]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO

-- TABLE ActivoTipo
CREATE TABLE [Inventario].[ActivoTipo]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO

-- TABLE TerrenoTipo
CREATE TABLE [Inventario].[TerrenoTipo]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(101) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO


-- TABLE MobiliarioTipo
CREATE TABLE [Inventario].[MobiliarioTipo]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(400) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO


-- Equipos de oficina, eléctricos y otros
CREATE TABLE [Inventario].[EquipoOficina]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(400) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)
GO

-- Equipos de Tecnologia y comunicacion
CREATE TABLE [Inventario].[EquipoTecnoYComunica]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(400) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)


-- TABLE Transporte

CREATE TABLE [Inventario].[EquipoTransporte]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY(Id),
    [Nombre] VARCHAR(400) NOT NULL,
    [FechaCreacion] DATETIME DEFAULT (GETDATE())
)

























/*          SEED         */
USE SWF;
--    COMANIAS
INSERT INTO Compania.Datos
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

-- Departamento
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
    ('San Martín'),
    ('Barletta')
GO

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

INSERT INTO Inventario.TerrenoTipo
    (
    [Nombre]
    )
VALUES
    ('Urbano'),
    ('Rural')
GO

INSERT INTO Inventario.MobiliarioTipo
    (
    [Nombre]
    )
VALUES
    ('Escritorio sencillo'),
    ('Escritorio sencillo con gavetero integrado'),
    ('Escritorio en L'),
    ('Escritorio en L con gavetero integrado'),
    ('Credenza'),
    ('Mesa redonda de cocina'),
    ('Mesa redonda de reuniones'),
    ('Mesa cuadrada de cocina'),
    ('Mesa rectangular de reuniones'),
    ('Estantería'),
    ('Silla secretarial'),
    ('Silla secretarial con brazos'),
    ('Silla de visitante individual'),
    ('Silla de visitante individual con brazos'),
    ('Silla de visitante rack de 3'),
    ('Silla de visitante rack de 4'),
    ('Silla ejecutiva'),
    ('Sofá de 2 puestos'),
    ('Sofá de 3 puestos'),
    ('Archivador de 2 gavetas'),
    ('Archivador de 3 gavetas'),
    ('Archivador de 3 gavetas'),
    ('Archivador contra incendio de 3 gavetas'),
    ('Archivador contra incendio de 4 gavetas'),
    ('Counter de recepción'),
    ('Counter de venta'),
    ('Exhibidor'),
    ('Mobiliario de kitchinette'),
    ('Biblioteca'),
    ('Mampara de acrílico para escritorio'),
    ('Mampara de vidrio para escritorio'),
    ('Mampara de madera tapizada para escritorio'),
    ('Mampara de madera tapizada para estaciones de trabajo'),
    ('Letrero lumínico'),
    ('Exibidores  pequeños'),
    ('Exibidores grande'),
    ('Sillas Plasticas'),
    ('Archivos de Pared'),
    ('Bitrina de cristal '),
    ('Cuadros sin enmarcar'),
    ('Cuadros enmarcado'),
    ('Pizarra transparente'),
    ('Pizarra Blanca'),
    ('Pódium')
GO

INSERT INTO Inventario.EquipoOficina
    (
    [Nombre]
    )
VALUES
    ('Trituradora'),
    ('Sumadora'),
    ('Máquina de escribir'),
    ('Televisor 32"'),
    ('Televisor 42"'),
    ('Televisor 43"'),
    ('Televisor 50"'),
    ('Televisor 55"'),
    ('Inversor'),
    ('Planta eléctrica'),
    ('Abanico de pedestal'),
    ('Abanico de techo de 4 paletas'),
    ('Abanico de techo de 3 paletas'),
    ('Extintor'),
    ('Armario Rack 6 U'),
    ('Armario Rack 8 U'),
    ('Armario Rack 42 U'),
    ('Armario Rack 20 U'),
    ('Lámpara de techo'),
    ('Nevera'),
    ('Bebedero'),
    ('Aire Central '),
    ('Compresor de aire'),
    ('Logo')
GO

INSERT INTO Inventario.EquipoTecnoYComunica
    (
    [Nombre]
    )
VALUES
    ('Tablet'),
    ('Tablet para firma digital'),
    ('IPad'),
    ('Laptop'),
    ('Monitor 13"'),
    ('Monitor 14"'),
    ('Monitor 15"'),
    ('Monitor 16"'),
    ('Monitor 17"'),
    ('Monitor 18"'),
    ('Monitor 19"'),
    ('Monitor 20"'),
    ('Monitor 21"'),
    ('Monitor 22"'),
    ('Teclado cableado en inglés'),
    ('Teclado en español'),
    ('Mouse cableado'),
    ('Mouse inalámbrico'),
    ('Desktop'),
    ('Servidor'),
    ('Impresora térmica'),
    ('Impresora multifuncional'),
    ('Impresora matricial'),
    ('Central telefónica análoga'),
    ('Central telefónica digital VoIP'),
    ('Teléfono análogo'),
    ('Teléfono Digital VoIP'),
    ('Handset'),
    ('Teléfono celular Smart'),
    ('Teléfono celular Simple'),
    ('Repetidores de señales'),
    ('UPS'),
    ('Sistema de alarma (inlcuye panel)'),
    ('Sistema de CCTV DVR'),
    ('Sistema de CCTV Cámar')
GO

INSERT INTO Inventario.EquipoTransporte
    (
    [Nombre]
    )
VALUES
    ('Vehiculos livianos'),
    ('Vehiculos de carga'),
    ('Motor')
GO



-- ALTER TABLE [Compania].[InfoCompania]
-- ADD CONSTRAINT FK_Salary_Employee FOREIGN KEY (EmployeeID)
-- REFERENCES Employee (ID);
-- GO

CONSTRAINT FK_STU_ID
FOREIGN KEY
(student_id) REFERENCES Students
(id),
CONSTRAINT FK_COURSE_ID FOREIGN KEY
(course_id) REFERENCES courses
(id));