"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(database) {
        this.database = database;
    }
    async createOne(userDto) {
        try {
            const user = await this.database.users.create({ data: { ...userDto } });
            const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
            return { token: token };
        }
        catch (error) {
            return error;
        }
    }
    async authorization(loginData) {
        try {
            const user = await this.database.users.findFirst({
                where: {
                    email: loginData.email,
                    password: loginData.password,
                },
            });
            const authToken = jwt.sign({ ...user }, process.env.JWT_SECRET);
            return { token: authToken };
        }
        catch (error) {
            return error;
        }
    }
};
exports.UsersService = UsersService;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "createOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "authorization", null);
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsersService);
//# sourceMappingURL=users.service.js.map