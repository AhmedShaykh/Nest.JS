import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { EmployeesModule } from "./employees/employees.module";
import { DatabaseModule } from "./database/database.module";
import { MyLoggerModule } from "./logger/my-logger.module";
import { UsersModule } from "./users/users.module";
import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    EmployeesModule,
    DatabaseModule,
    UsersModule,
    ThrottlerModule.forRoot([{
      name: "short",
      ttl: 1000,
      limit: 3
    },
    {
      name: "long",
      ttl: 60000,
      limit: 100
    }]),
    MyLoggerModule
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }]
})
export class AppModule { };