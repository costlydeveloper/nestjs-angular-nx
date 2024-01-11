/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(3), exports);


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = exports.AppConfig = void 0;
const tslib_1 = __webpack_require__(2);
var app_config_1 = __webpack_require__(4);
Object.defineProperty(exports, "AppConfig", ({ enumerable: true, get: function () { return app_config_1.default; } }));
var database_config_1 = __webpack_require__(7);
Object.defineProperty(exports, "DatabaseConfig", ({ enumerable: true, get: function () { return database_config_1.default; } }));
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(6), exports);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(5);
const ports_config_1 = __webpack_require__(6);
exports["default"] = (0, config_1.registerAs)('config', () => ({
    port: parseInt(process.env['PORT'], 10) || ports_config_1.APP_PORT,
    nodenv: process.env['NODE_ENV'],
}));


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.POSTGRES_PORT = exports.APP_PORT = void 0;
exports.APP_PORT = 3000;
exports.POSTGRES_PORT = 5432;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(5);
const ports_config_1 = __webpack_require__(6);
exports["default"] = (0, config_1.registerAs)('database', () => ({
    type: 'postgres',
    host: process.env['DB_HOST'] || 'localhost',
    port: parseInt(process.env['DB_PORT'], 10) || ports_config_1.POSTGRES_PORT,
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_DATABASE'],
    synchronize: process.env['NODE_ENV'] === 'development',
    logging: process.env['NODE_ENV'] === 'development',
}));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalConfigModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const config_1 = __webpack_require__(5);
const app_config_1 = __webpack_require__(4);
const config_schema_1 = __webpack_require__(10);
const database_config_1 = __webpack_require__(7);
let LocalConfigModule = exports.LocalConfigModule = class LocalConfigModule {
};
exports.LocalConfigModule = LocalConfigModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                load: [app_config_1.default, database_config_1.default],
                validationSchema: config_schema_1.configValidationSchema,
            }),
        ],
    })
], LocalConfigModule);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configValidationSchema = void 0;
const Joi = __webpack_require__(11);
const ports_config_1 = __webpack_require__(6);
exports.configValidationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision'),
    PORT: Joi.number().default(ports_config_1.APP_PORT),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(ports_config_1.POSTGRES_PORT).required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
});


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@hapi/joi");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExposedEntities = void 0;
const tasks_1 = __webpack_require__(14);
const users_1 = __webpack_require__(60);
exports.ExposedEntities = [users_1.User, tasks_1.Task];


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Task = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(39);
const class_transformer_1 = __webpack_require__(52);
const typeorm_1 = __webpack_require__(20);
const users_1 = __webpack_require__(60);
const task_status_enum_1 = __webpack_require__(73);
let Task = exports.Task = class Task extends common_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.title = null;
        this.description = null;
        this.descriptions = null;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof utils_1.Nullable !== "undefined" && utils_1.Nullable) === "function" ? _a : Object)
], Task.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof utils_1.Nullable !== "undefined" && utils_1.Nullable) === "function" ? _b : Object)
], Task.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof utils_1.Nullable !== "undefined" && utils_1.Nullable) === "function" ? _c : Object)
], Task.prototype, "descriptions", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: task_status_enum_1.TaskStatus, default: task_status_enum_1.TaskStatus.OPEN }),
    tslib_1.__metadata("design:type", typeof (_d = typeof task_status_enum_1.TaskStatus !== "undefined" && task_status_enum_1.TaskStatus) === "function" ? _d : Object)
], Task.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)((_type) => users_1.User, (user) => user.tasks, { eager: false }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    tslib_1.__metadata("design:type", typeof (_e = typeof users_1.User !== "undefined" && users_1.User) === "function" ? _e : Object)
], Task.prototype, "user", void 0);
exports.Task = Task = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Task);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedCommonModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
let SharedCommonModule = exports.SharedCommonModule = class SharedCommonModule {
};
exports.SharedCommonModule = SharedCommonModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], SharedCommonModule);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const tslib_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(20);
class BaseEntity {
}
exports.BaseEntity = BaseEntity;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], BaseEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseEntity.prototype, "createdDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseEntity.prototype, "updatedDate", void 0);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntityService = void 0;
class BaseEntityService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        return this.repository.find();
    }
    findById(id) {
        return this.repository.findOneBy({ id });
    }
    async remove(id) {
        await this.repository.delete(id);
    }
}
exports.BaseEntityService = BaseEntityService;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseDto = void 0;
const tslib_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(20);
class BaseDto {
}
exports.BaseDto = BaseDto;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], BaseDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseDto.prototype, "createdDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseDto.prototype, "updatedDate", void 0);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseRepository = void 0;
const typeorm_1 = __webpack_require__(20);
class BaseRepository extends typeorm_1.Repository {
    constructor(repo) {
        super(repo.target, repo.manager, repo.queryRunner);
    }
}
exports.BaseRepository = BaseRepository;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
class BaseController {
    constructor(service) {
        this.service = service;
    }
    getById(id) {
        return this.service.findById(id);
    }
    remove(id) {
        return this.service.remove(id);
    }
}
exports.BaseController = BaseController;
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], BaseController.prototype, "getById", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BaseController.prototype, "remove", null);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MESSAGE = void 0;
exports.MESSAGE = {
    VALIDATION: {
        WEAK_PASSWORD: 'Password is too weak',
    },
    ERROR: {
        USERNAME_EXIST: 'Username already exists',
        UNSUPPORTED_DATABASE_TYPE: 'Unsupported database type',
    },
};


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbErrorHandlerModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const db_error_handler_service_1 = __webpack_require__(29);
const db_error_provider_1 = __webpack_require__(31);
let DbErrorHandlerModule = exports.DbErrorHandlerModule = class DbErrorHandlerModule {
};
exports.DbErrorHandlerModule = DbErrorHandlerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [db_error_handler_service_1.DbErrorHandler, db_error_provider_1.DatabaseErrorsProvider],
        exports: [db_error_handler_service_1.DbErrorHandler],
    })
], DbErrorHandlerModule);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DbErrorHandler = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const type_interface_1 = __webpack_require__(30);
let DbErrorHandler = exports.DbErrorHandler = class DbErrorHandler {
    constructor(codes) {
        this.codes = codes;
    }
};
exports.DbErrorHandler = DbErrorHandler = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)('DATABASE_ERRORS')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof type_interface_1.IDbError !== "undefined" && type_interface_1.IDbError) === "function" ? _a : Object])
], DbErrorHandler);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseErrorsProvider = void 0;
const platform_1 = __webpack_require__(32);
const messages_1 = __webpack_require__(25);
const mysql_1 = __webpack_require__(37);
const postgres_1 = __webpack_require__(38);
exports.DatabaseErrorsProvider = {
    provide: 'DATABASE_ERRORS',
    useFactory: () => {
        let errorType;
        switch (platform_1.environmentGlobal.database.type) {
            case 'mysql':
                errorType = mysql_1.mysqlErrors;
                break;
            case 'postgres':
                errorType = postgres_1.PostgresErrors;
                break;
            default:
                throw new Error(messages_1.MESSAGE.ERROR.UNSUPPORTED_DATABASE_TYPE);
        }
        return errorType;
    },
};


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatformModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
let PlatformModule = exports.PlatformModule = class PlatformModule {
};
exports.PlatformModule = PlatformModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [],
    })
], PlatformModule);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environmentGlobal = void 0;
exports.environmentGlobal = {
    production: false,
    database: {
        type: 'postgres',
        autoloadEntities: true,
    },
};


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mysqlErrors = void 0;
exports.mysqlErrors = {
    UNIQUE_VIOLATION: 'ER_DUP_ENTRY',
};


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostgresErrors = void 0;
exports.PostgresErrors = {
    UNIQUE_VIOLATION: '23505',
};


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedUtilsModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const logger_module_1 = __webpack_require__(41);
let SharedUtilsModule = exports.SharedUtilsModule = class SharedUtilsModule {
};
exports.SharedUtilsModule = SharedUtilsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [logger_module_1.LoggerModule],
    })
], SharedUtilsModule);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const nestjs_pino_1 = __webpack_require__(42);
let LoggerModule = exports.LoggerModule = class LoggerModule {
};
exports.LoggerModule = LoggerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                forRoutes: ['*'],
                pinoHttp: {
                    customProps: (req, res) => ({
                        context: 'HTTP',
                    }),
                    autoLogging: false,
                    transport: {
                        target: 'pino-pretty',
                        options: {
                            colorizeObjects: true,
                            messageFormat: '[{context}] {msg} ',
                            singleLine: true,
                        },
                    },
                },
            }),
        ],
    })
], LoggerModule);


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.comparePasswords = exports.encodePassword = void 0;
const bcrypt = __webpack_require__(45);
function encodePassword(rawPassword) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPassword, salt);
}
exports.encodePassword = encodePassword;
function comparePasswords(rawPassword, hash) {
    return bcrypt.compareSync(rawPassword, hash);
}
exports.comparePasswords = comparePasswords;


/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(9);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Serialize = void 0;
const common_1 = __webpack_require__(9);
const serialize_interceptor_1 = __webpack_require__(51);
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new serialize_interceptor_1.SerializeInterceptor(dto));
}
exports.Serialize = Serialize;


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SerializeInterceptor = void 0;
const class_transformer_1 = __webpack_require__(52);
const operators_1 = __webpack_require__(53);
class SerializeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, handler) {
        return handler.handle().pipe((0, operators_1.map)((data) => {
            return (0, class_transformer_1.plainToInstance)(this.dto, data, {
                excludeExtraneousValues: true,
            });
        }));
    }
}
exports.SerializeInterceptor = SerializeInterceptor;


/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 53 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(9);
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const class_transformer_1 = __webpack_require__(52);
const operators_1 = __webpack_require__(53);
let TransformInterceptor = exports.TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => (0, class_transformer_1.plainToClass)(data, {
            excludeExtraneousValues: true,
        })));
    }
};
exports.TransformInterceptor = TransformInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMAIL_REGEXP = exports.PASSWORD_REGEXP = void 0;
exports.PASSWORD_REGEXP = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
exports.EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(61), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_transformer_1 = __webpack_require__(52);
class UserDto {
}
exports.UserDto = UserDto;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "username", void 0);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(64);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);


/***/ }),
/* 64 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const common_2 = __webpack_require__(9);
const typeorm_1 = __webpack_require__(66);
const user_entity_1 = __webpack_require__(67);
const users_repository_service_1 = __webpack_require__(68);
const users_controller_1 = __webpack_require__(69);
const users_service_1 = __webpack_require__(72);
let UsersModule = exports.UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_2.Module)({
        imports: [common_1.DbErrorHandlerModule, typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        providers: [users_service_1.UsersService, users_repository_service_1.UsersRepository],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 66 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(39);
const typeorm_1 = __webpack_require__(20);
const tasks_1 = __webpack_require__(14);
let User = exports.User = class User extends common_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.firstName = null;
        this.lastName = null;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof utils_1.Nullable !== "undefined" && utils_1.Nullable) === "function" ? _a : Object)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof utils_1.Nullable !== "undefined" && utils_1.Nullable) === "function" ? _b : Object)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)((_type) => tasks_1.Task, (task) => task.user, { eager: true }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "tasks", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const common_2 = __webpack_require__(9);
const typeorm_1 = __webpack_require__(66);
const typeorm_2 = __webpack_require__(20);
const user_entity_1 = __webpack_require__(67);
let UsersRepository = exports.UsersRepository = class UsersRepository extends common_1.BaseRepository {
    constructor(repo) {
        super(repo);
    }
    async findAll() {
        return this.find();
    }
};
exports.UsersRepository = UsersRepository = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersRepository);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(39);
const common_2 = __webpack_require__(9);
const swagger_1 = __webpack_require__(70);
const auth_credentials_dto_1 = __webpack_require__(71);
const dto_1 = __webpack_require__(61);
const users_service_1 = __webpack_require__(72);
let UsersController = exports.UsersController = class UsersController extends common_1.BaseController {
    constructor(usersService) {
        super(usersService);
        this.usersService = usersService;
    }
    create(authCredentialsDto) {
        return this.usersService.create(authCredentialsDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiBody)({
        type: dto_1.CreateUserDto,
        description: 'Json structure for user object',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, common_2.Post)(),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof auth_credentials_dto_1.AuthCredentialsDto !== "undefined" && auth_credentials_dto_1.AuthCredentialsDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_2.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "findAll", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, common_2.Controller)('users'),
    (0, utils_1.Serialize)(dto_1.UserDto),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 70 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthCredentialsDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(64);
class AuthCredentialsDto {
}
exports.AuthCredentialsDto = AuthCredentialsDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AuthCredentialsDto.prototype, "password", void 0);


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(39);
const common_2 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(67);
const users_repository_service_1 = __webpack_require__(68);
let UsersService = exports.UsersService = class UsersService extends common_1.BaseEntityService {
    constructor(usersRepository, dbErrHandler) {
        super(usersRepository);
        this.usersRepository = usersRepository;
        this.dbErrHandler = dbErrHandler;
    }
    async create(createUserDto) {
        const newUser = new user_entity_1.User();
        newUser.username = createUserDto.username;
        newUser.password = (0, utils_1.encodePassword)(createUserDto.password);
        try {
            const storedUser = await this.usersRepository.save(newUser);
            const { password } = storedUser, userWithoutPassword = tslib_1.__rest(storedUser, ["password"]);
            return userWithoutPassword;
        }
        catch (error) {
            if (error.code === this.dbErrHandler.codes.UNIQUE_VIOLATION) {
                throw new common_2.ConflictException(common_1.MESSAGE.ERROR.USERNAME_EXIST);
            }
            else {
                throw new common_2.InternalServerErrorException();
            }
        }
    }
    findByUsername(username) {
        return this.usersRepository.findOneBy({ username });
    }
};
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_repository_service_1.UsersRepository !== "undefined" && users_repository_service_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof common_1.DbErrorHandler !== "undefined" && common_1.DbErrorHandler) === "function" ? _b : Object])
], UsersService);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["OPEN"] = "OPEN";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["DONE"] = "DONE";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndpointsModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const auth_module_1 = __webpack_require__(75);
const tasks_module_1 = __webpack_require__(87);
const users_1 = __webpack_require__(60);
let EndpointsModule = exports.EndpointsModule = class EndpointsModule {
};
exports.EndpointsModule = EndpointsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [tasks_module_1.TasksModule, users_1.UsersModule, auth_module_1.AuthModule],
    })
], EndpointsModule);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const config_1 = __webpack_require__(5);
const core_1 = __webpack_require__(76);
const jwt_1 = __webpack_require__(77);
const passport_1 = __webpack_require__(78);
const users_1 = __webpack_require__(60);
const auth_controller_1 = __webpack_require__(79);
const auth_service_1 = __webpack_require__(80);
const jwt_auth_guard_1 = __webpack_require__(82);
const jwt_strategy_service_1 = __webpack_require__(83);
const local_strategy_service_1 = __webpack_require__(85);
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        imports: [
            users_1.UsersModule,
            passport_1.PassportModule.register({ session: true }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: 3600,
                    },
                }),
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            local_strategy_service_1.LocalStrategy,
            jwt_strategy_service_1.JwtStrategy,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 76 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 77 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(39);
const common_1 = __webpack_require__(9);
const users_1 = __webpack_require__(60);
const auth_service_1 = __webpack_require__(80);
const auth_credentials_dto_1 = __webpack_require__(71);
const local_auth_guard_1 = __webpack_require__(81);
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(req) {
        return this.authService.signIn(req.user);
    }
    async signUp(body) {
        return this.authService.signUp(body);
    }
    whoAmI(user) {
        return user;
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, utils_1.Public)(),
    (0, common_1.Post)('signin'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "signIn", null);
tslib_1.__decorate([
    (0, utils_1.Public)(),
    (0, common_1.Post)('signup'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof auth_credentials_dto_1.AuthCredentialsDto !== "undefined" && auth_credentials_dto_1.AuthCredentialsDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
tslib_1.__decorate([
    (0, common_1.Get)('/whoami'),
    tslib_1.__param(0, (0, utils_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof users_1.IUserIdentifier !== "undefined" && users_1.IUserIdentifier) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "whoAmI", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const jwt_1 = __webpack_require__(77);
const users_1 = __webpack_require__(60);
let AuthService = exports.AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(userWithoutPassword) {
        const payload = {
            username: userWithoutPassword.username,
            sub: userWithoutPassword.id,
        };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async signUp(authCredentialsDto) {
        return this.usersService.create(authCredentialsDto);
    }
};
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_1.UsersService !== "undefined" && users_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const passport_1 = __webpack_require__(78);
let LocalAuthGuard = exports.LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
exports.LocalAuthGuard = LocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(39);
const common_1 = __webpack_require__(9);
const core_1 = __webpack_require__(76);
const passport_1 = __webpack_require__(78);
let JwtAuthGuard = exports.JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(utils_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtAuthGuard = JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const config_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(78);
const passport_jwt_1 = __webpack_require__(84);
let JwtStrategy = exports.JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
    }
    async validate(payload) {
        return { id: payload.sub, username: payload.username };
    }
};
exports.JwtStrategy = JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 84 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(39);
const common_1 = __webpack_require__(9);
const passport_1 = __webpack_require__(78);
const passport_local_1 = __webpack_require__(86);
const users_1 = __webpack_require__(60);
let LocalStrategy = exports.LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(usersService) {
        super({
            passReqToCallback: true,
        });
        this.usersService = usersService;
    }
    async validate(request, username, password) {
        const user = await this.validateUser(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async validateUser(username, password) {
        const storedUser = await this.usersService.findByUsername(username);
        if (storedUser && (0, utils_1.comparePasswords)(password, storedUser.password)) {
            const { password } = storedUser, userWithoutPassword = tslib_1.__rest(storedUser, ["password"]);
            return userWithoutPassword;
        }
        return null;
    }
};
exports.LocalStrategy = LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_1.UsersService !== "undefined" && users_1.UsersService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 86 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const typeorm_1 = __webpack_require__(66);
const task_entity_1 = __webpack_require__(15);
const tasks_controller_1 = __webpack_require__(88);
const tasks_repository_1 = __webpack_require__(93);
const tasks_service_1 = __webpack_require__(92);
let TasksModule = exports.TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task])],
        providers: [tasks_service_1.TasksService, tasks_repository_1.TasksRepository],
        controllers: [tasks_controller_1.TasksController],
    })
], TasksModule);


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const utils_1 = __webpack_require__(39);
const common_2 = __webpack_require__(9);
const users_1 = __webpack_require__(60);
const create_task_dto_1 = __webpack_require__(89);
const get_tasks_filter_dto_1 = __webpack_require__(90);
const update_task_status_dto_1 = __webpack_require__(91);
const tasks_service_1 = __webpack_require__(92);
let TasksController = exports.TasksController = class TasksController extends common_1.BaseController {
    constructor(tasksService) {
        super(tasksService);
        this.tasksService = tasksService;
        this.logger = new common_2.Logger('TasksController');
    }
    findAll(filterDto, user) {
        this.logger.verbose(`User "${user.username}" retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`);
        return this.tasksService.findAll();
    }
    createTask(createTaskDto, user) {
        this.logger.verbose(`User "${user.username}" creating a new task. Data: ${JSON.stringify(createTaskDto)}`);
        return this.tasksService.createTask(createTaskDto, user);
    }
    updateTaskStatus(id, updateTaskStatusDto, user) {
        const { status } = updateTaskStatusDto;
        return this.tasksService.updateTaskStatus(id, status, user);
    }
};
tslib_1.__decorate([
    (0, common_2.Get)(),
    tslib_1.__param(0, (0, common_2.Query)()),
    tslib_1.__param(1, (0, utils_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof get_tasks_filter_dto_1.GetTasksFilterDto !== "undefined" && get_tasks_filter_dto_1.GetTasksFilterDto) === "function" ? _b : Object, typeof (_c = typeof users_1.User !== "undefined" && users_1.User) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TasksController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_2.Post)(),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__param(1, (0, utils_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof create_task_dto_1.CreateTaskDto !== "undefined" && create_task_dto_1.CreateTaskDto) === "function" ? _e : Object, typeof (_f = typeof users_1.User !== "undefined" && users_1.User) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TasksController.prototype, "createTask", null);
tslib_1.__decorate([
    (0, common_2.Patch)('/:id/status'),
    tslib_1.__param(0, (0, common_2.Param)('id')),
    tslib_1.__param(1, (0, common_2.Body)()),
    tslib_1.__param(2, (0, utils_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_h = typeof update_task_status_dto_1.UpdateTaskStatusDto !== "undefined" && update_task_status_dto_1.UpdateTaskStatusDto) === "function" ? _h : Object, typeof (_j = typeof users_1.User !== "undefined" && users_1.User) === "function" ? _j : Object]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], TasksController.prototype, "updateTaskStatus", null);
exports.TasksController = TasksController = tslib_1.__decorate([
    (0, common_2.Controller)('tasks'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof tasks_service_1.TasksService !== "undefined" && tasks_service_1.TasksService) === "function" ? _a : Object])
], TasksController);


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTaskDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(64);
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetTasksFilterDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(64);
const task_status_enum_1 = __webpack_require__(73);
class GetTasksFilterDto {
}
exports.GetTasksFilterDto = GetTasksFilterDto;
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(task_status_enum_1.TaskStatus),
    tslib_1.__metadata("design:type", typeof (_a = typeof task_status_enum_1.TaskStatus !== "undefined" && task_status_enum_1.TaskStatus) === "function" ? _a : Object)
], GetTasksFilterDto.prototype, "status", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetTasksFilterDto.prototype, "search", void 0);


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTaskStatusDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(64);
const task_status_enum_1 = __webpack_require__(73);
class UpdateTaskStatusDto {
}
exports.UpdateTaskStatusDto = UpdateTaskStatusDto;
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(task_status_enum_1.TaskStatus),
    tslib_1.__metadata("design:type", typeof (_a = typeof task_status_enum_1.TaskStatus !== "undefined" && task_status_enum_1.TaskStatus) === "function" ? _a : Object)
], UpdateTaskStatusDto.prototype, "status", void 0);


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const common_2 = __webpack_require__(9);
const tasks_repository_1 = __webpack_require__(93);
let TasksService = exports.TasksService = class TasksService extends common_1.BaseEntityService {
    constructor(tasksRepository) {
        super(tasksRepository);
        this.tasksRepository = tasksRepository;
    }
    async getTaskById(id, user) {
        const found = await this.tasksRepository.findOne({
            where: { id },
        });
        if (!found) {
            throw new common_2.NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }
    createTask(createTaskDto, user) {
        return this.tasksRepository.createTask(createTaskDto, user);
    }
    async deleteTask(id, user) {
        const result = await this.tasksRepository.delete({
            id,
        });
        if (result.affected === 0) {
            throw new common_2.NotFoundException(`Task with ID "${id}" not found`);
        }
    }
    async updateTaskStatus(id, status, user) {
        const task = await this.getTaskById(id, user);
        task.status = status;
        await this.tasksRepository.save(task);
        return task;
    }
};
exports.TasksService = TasksService = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof tasks_repository_1.TasksRepository !== "undefined" && tasks_repository_1.TasksRepository) === "function" ? _a : Object])
], TasksService);


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksRepository = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(16);
const common_2 = __webpack_require__(9);
const typeorm_1 = __webpack_require__(66);
const typeorm_2 = __webpack_require__(20);
const task_status_enum_1 = __webpack_require__(73);
const task_entity_1 = __webpack_require__(15);
let TasksRepository = exports.TasksRepository = class TasksRepository extends common_1.BaseRepository {
    constructor(repo) {
        super(repo);
        this.logger = new common_2.Logger('TasksRepository');
    }
    async getTasks(filterDto, user) {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
        query.where({ user });
        if (status) {
            query.andWhere('task.status = :status', { status });
        }
        if (search) {
            query.andWhere('(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))', { search: `%${search}%` });
        }
        try {
            const tasks = await query.getMany();
            return tasks;
        }
        catch (error) {
            this.logger.error(`Failed to get tasks for user "${user.username}". Filters: ${JSON.stringify(filterDto)}`, error.stack);
            throw new common_2.InternalServerErrorException();
        }
    }
    async createTask(createTaskDto, user) {
        const { title, description } = createTaskDto;
        const task = this.create({
            title,
            description,
            status: task_status_enum_1.TaskStatus.OPEN,
            user,
        });
        await this.save(task);
        return task;
    }
};
exports.TasksRepository = TasksRepository = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TasksRepository);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(1);
const endpoints_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(20);
exports["default"] = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env['DB_HOST'] || 'localhost',
    port: process.env['DB_PORT']
        ? parseInt(process.env['DB_PORT'], 10)
        : config_1.POSTGRES_PORT,
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_DATABASE'],
    entities: endpoints_1.ExposedEntities,
    synchronize: true,
    logging: true,
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;