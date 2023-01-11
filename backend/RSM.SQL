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
    [IdCodigo] VARCHAR(100),
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
    ('Otros')
GO

INSERT INTO Inventario.ActivoTipoCategoria
    (
    [IdActivoTipo],
    [Nombre]
    )
VALUES
    --1
    (1, 'Santo Domingo Alma Rosa'),
    (1, 'Santo Domingo Las Americas'),
    (1, 'Santo Domingo Metropolitano'),
    (1, 'Bavaro Veron'),
    (1, 'Punta Cana'),
    --2
    (2, 'Santo Domingo Alma Rosa'),
    (2, 'Santo Domingo Las Americas'),
    (2, 'Santo Domingo Metropolitano'),
    (2, 'Santiago'),
    (2, 'Bavaro Veron'),
    (2, 'Punta Cana'),
    --3
    (3, 'Escritorio'),
    (3, 'Sillas de escritorio'),
    (3, 'Otras sillas'),
    (3, 'Mesas de reunión'),
    (3, 'Otras mesas'),
    (3, 'Credenza'),
    (3, 'Archivo grande'),
    (3, 'Archivos pequeño'),
    (3, 'Sistemas modulare'),
    (3, 'Sillon ejecutivo'),
    (3, 'Sofa'),
    (3, 'Stand'),
    (3, 'Counter'),
    (3, 'Locker'),
    (3, 'Armario'),
    --4
    (4, 'Vehiculo Liviano'),
    (4, 'Vehiculo Pesado'),
    --5
    (5, 'Laptop'),
    (5, 'Computadora de Escritorio'),
    (5, 'Telefono'),
    (5, 'Imprerora de lavel'),
    (5, 'Imprerora de proforma'),
    (5, 'Impresora Fiscal'),
    (5, 'Impresora Ploter'),
    (5, 'Impresora Tonner'),
    (5, 'Impresora'),
    (5, 'Modem'),
    (5, 'Tablet'),
    (5, 'Disco duro'),
    (5, 'UPS'),
    (5, 'Servidor'),
    (5, 'Docking Station'),
    (5, 'Trituradora'),
    (5, 'CPU'),
    (5, 'Monitor'),
    (5, 'Escaner'),
    (5, 'Maquina de escribir'),
    (5, 'TV Plasma'),
    (5, 'Proyector'),
    (5, 'Repetidor'),
    (5, 'Panel de Proyeccion'),
    (5, 'Juego de Bocinas'),
    --6
    (6, 'Sistema de Seguridad de cámara'),
    (6, 'Sistema de seguridad de alarma'),
    --7
    (7, 'Taladros Bateria'),
    (7, 'Pistola Neumatica Grapadoras Pequeña'),
    (7, 'Pistola Neumatica Grapadoras grande'),
    (7, 'Pistola Neumatica Pistola Grapa 3/4'),
    (7, 'Pistola Neumatica Blowber'),
    (7, 'Pistolas Neumatica de Aguja'),
    (7, 'Pistola Neumatica Caliente'),
    (7, 'Calador'),
    (7, 'Drimer Peq'),
    (7, 'Drimer Grande '),
    (7, 'Cepillo Manual'),
    (7, 'Galleteras'),
    (7, 'Pulidoras grandes'),
    (7, 'Pulidora Pequeña'),
    (7, 'Envases de Pintura'),
    (7, 'Balanza 1 Digito'),
    (7, 'Balanza 2 Digito'),
    --8
    (8, 'Maquina Control Numerico'),
    (8, 'Maquina Enchapadora'),
    (8, 'Maq. Succionadora Pleibu'),
    (8, 'Maq. Sinfin Acostado'),
    (8, 'Maq. Sinfin Parado'),
    (8, 'Maq. Mordudera '),
    (8, 'Maq. Multiple'),
    (8, 'Maq. Perfiladora de Pulpa'),
    (8, 'Maq. Epiladoras'),
    (8, 'Maq. Galopa'),
    (8, 'Maq. Pulidoras de Panel'),
    (8, 'Maq. Degrosador'),
    (8, 'Maq. Cuadradora de Puerta'),
    (8, 'Maq. Cortadora de Chapa'),
    (8, 'Maq. Encoladora'),
    (8, 'Maq. Chapadora de Panel'),
    (8, 'Maq. Calibradora '),
    (8, 'Maq. Topi'),
    (8, 'Maq. Torno'),
    (8, 'Maq. Copiadora Taladro'),
    (8, 'Prensa Pulpo'),
    (8, 'Maq. Taladro Pedestal'),
    (8, 'Maq. Guiyotina Radial'),
    (8, 'Maq. Cuadradora de Maco'),
    (8, 'Maq. Sierra Principal'),
    (8, 'Maq. Sierras de Mesa'),
    (8, 'Maq. Bandiadora de Mimbre'),
    (8, 'Maq. Chapadoras'),
    (8, 'Maq. Pulidora de Canta'),
    (8, 'Maq. Pulidora de Turba'),
    (8, 'Maq. Casillera'),
    (8, 'Maq. De Coser'),
    (8, 'Maq. Prensa'),
    (8, 'Turbina'),
    (8, 'Maquina corta tela '),
    (8, 'Maquina Batidora'),
    (8, 'Maquina Tintometrica'),
    (8, 'Maq. Uña de Carga'),
    (8, 'Maquinas de Balanza'),
    (8, 'Maquina de Sellar Pintura'),
    (8, 'Cabina Extractora'),
    (8, 'Maq. Regruesadora'),
    (8, 'Maq. Escuadradora'),
    (8, 'Maq. Guillotina'),
    (8, 'Maq. Copladora'),
    (8, 'Maq. Tupit'),
    (8, 'Maq. Taladoras Alambre'),
    (8, 'Maq. Taladoras Pila'),
    (8, 'Maq. Pistolas de Clavo'),
    (8, 'Maq. Tuteri'),
    (8, 'Maq. Sierra de mano'),
    (8, 'Maq. Pulidoras de mano'),
    (8, 'Maq. Escaladora'),
    (8, 'Maq. Taladro de Pared'),
    (8, 'Maq. Cepilladora de mano'),
    (8, 'Maq. Lijadoras'),
    (8, 'Maq. Aspiradora de Mesa'),
    --9
    (9, 'Extintor'),
    (9, 'Planta Electrica'),
    (9, 'Abanicos '),
    (9, 'Compresor de Humo'),
    (9, 'Compresor de Pintura'),
    (9, 'Aire Acondicionado'),
    (9, 'Mangueras contra incendios'),
    (9, 'Tanque de Gasoil'),
    (9, 'Bomba de Agua Ladrona '),
    (9, 'Baterias de inversor'),
    (9, 'Tramos'),
    (9, 'Gabinetes '),
    (9, 'Despensa'),
    (9, 'Nevera de cocina'),
    (9, 'Neveras de oficina'),
    (9, 'Bebedero'),
    (9, 'Escalera'),
    (9, 'Inversor'),
    (9, 'Caja de seguridad'),
    (9, 'Extractores de aire'),
    (9, 'Aspiradora'),
    (9, 'Microondas'),
    (9, 'Estufa empotrada'),
    (9, 'Estufa de Mesa'),
    (9, 'Estufa de Horno'),
    (9, 'Extractor de grasa'),
    (9, 'Peso para Mimbres'),
    (9, 'Valvula de Compresion'),
    (9, 'Cafetera'),
    (9, 'Viniera'),
    (9, 'Licuadora'),
    (9, 'Bomba de Agua Sumergible'),
    (9, 'Bombas de Pintar'),
    (9, 'Compresor de Aire Aut'),
    (9, 'Secador de Aire'),
    (9, 'Transformadores'),
    (9, 'Monta Cargas'),
    (9, 'Monta Cargas Escalera'),
    (9, 'Cuadros'),
    (9, 'Filtro de Agua'),
    (9, 'Tanque de Gas'),
    (9, 'Sistema contra incendio')
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







