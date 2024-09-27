"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_service_1 = require("./database/database.service");
const deals_module_1 = require("./deals/deals.module");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const cors_middlewares_1 = require("./middlewares/cors.middlewares");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(cors_middlewares_1.CorsMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [deals_module_1.DealsModule, users_module_1.UsersModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, database_service_1.DatabaseService, users_service_1.UsersService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map