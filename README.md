# SW-DATABASE-FIRST

## Compilar proyecto

```
dotnet publish --configuration Release
```

mkdir backend
cd backend
dotnet new webapi -o API

## Backend NET 6 Packagas.

````hs
dotnet tool install --global dotnet-ef
dotnet tool update --global dotnet-ef
dotnet add package System.Linq --version 4.3.0
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 6.0.8
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.8
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.8
dotnet add package Microsoft.EntityFrameworkCore.Relational --version 6.0.8
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection --version 11.0.0
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 6.0.8
dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson --version 6.0.8

```

## Database First
```hs
## casa
dotnet ef dbcontext scaffold "Server=DESKTOP-5OBT54B\SQLEXPRESS;Database=SWF;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Models -f

## trabajo
dotnet ef dbcontext scaffold "Server=FIMED-IT-PC01\SQLEXPRESS;Database=SWF;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Models -c WebAppDbContext -f
````

dotnet clean && dotnet build && dotnet run

### Frontend packagas

```hs
npm install react-scripts@latest
npx create-react-app .
```

## Node modulos

```
npm install normalize.css
npm install styled-components
npm install react-router-dom
npm install @iconify/react
npm install axios
npm install react-paginate
npm install react-data-table-component
```

## Puertos

```
 http://localhost:5004 backend
 http://localhost:3000 frontend
```
