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
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExposedEntities = void 0;
const person_1 = __webpack_require__(5);
const users_1 = __webpack_require__(64);
exports.ExposedEntities = [person_1.Person, users_1.User];


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePersonDto = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(43);
const base_1 = __webpack_require__(44);
class CreatePersonDto extends base_1.BaseCreateDto {
}
exports.CreatePersonDto = CreatePersonDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof common_1.Nullable !== "undefined" && common_1.Nullable) === "function" ? _a : Object)
], CreatePersonDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof common_1.Nullable !== "undefined" && common_1.Nullable) === "function" ? _b : Object)
], CreatePersonDto.prototype, "lastName", void 0);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MESSAGE = void 0;
exports.MESSAGE = {
    VALIDATION: {
        WEAK_PASSWORD: 'Password must include at least one digit, one uppercase letter, one lowercase letter, one special character, and cannot contain dots or newlines.',
        USERNAME_MUST_BE_EMAIL: 'The username should be email',
    },
    INFO: {
        DATABASE_IS_CLEANED: 'Database is cleaned!',
    },
    ERROR: {
        USERNAME_EXIST: 'Username already exists',
        UNSUPPORTED_DATABASE_TYPE: 'Unsupported database type',
        REFRESH_TOKEN_MALFORMED: 'Refresh token malformed',
        INVALID_UUID_FORMAT: 'Invalid UUID format',
        FOREIGN_KEY_VIOLATION: 'Cannot delete the entity because it is referenced by another entity.',
        ENTITY_WITH_ID_DOES_NOT_EXIST: (id) => `Entity with ID ${id} does not exist`,
        INVALID_CIPHER_FORMAT: 'Invalid cipher format',
        INVALID_HMAC: 'Invalid hmac',
        DATA_VERIFICATION_FAILED: 'Data verification failed',
    },
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UUID_REGEXP = exports.EMAIL_REGEXP = exports.PASSWORD_REGEXP = void 0;
exports.PASSWORD_REGEXP = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
exports.EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.UUID_REGEXP = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DB_ERROR_CODE = void 0;
exports.DB_ERROR_CODE = {
    UNIQUE_VIOLATION: '23505',
    FOREIGN_KEY_VIOLATION: '23503',
};


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(15);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Serialize = void 0;
const common_1 = __webpack_require__(15);
const serialize_interceptor_1 = __webpack_require__(17);
function Serialize(vm) {
    return (0, common_1.UseInterceptors)(new serialize_interceptor_1.SerializeInterceptor(vm));
}
exports.Serialize = Serialize;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SerializeInterceptor = void 0;
const class_transformer_1 = __webpack_require__(18);
const operators_1 = __webpack_require__(19);
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
/* 18 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCurrentUser = void 0;
const common_1 = __webpack_require__(15);
exports.GetCurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    if (!data)
        return request.user;
    return request.user[data];
});


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCurrentUserId = void 0;
const common_1 = __webpack_require__(15);
exports.GetCurrentUserId = (0, common_1.createParamDecorator)((_, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user.sub;
});


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AtGuard = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const core_1 = __webpack_require__(24);
const passport_1 = __webpack_require__(25);
const decorators_1 = __webpack_require__(13);
let AtGuard = exports.AtGuard = class AtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(decorators_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.AtGuard = AtGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], AtGuard);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RtGuard = void 0;
const passport_1 = __webpack_require__(25);
class RtGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
    constructor() {
        super();
    }
}
exports.RtGuard = RtGuard;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const class_transformer_1 = __webpack_require__(18);
const operators_1 = __webpack_require__(19);
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
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UuidValidationPipe = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const constants_1 = __webpack_require__(9);
let UuidValidationPipe = exports.UuidValidationPipe = class UuidValidationPipe {
    transform(value) {
        if (!constants_1.UUID_REGEXP.test(value)) {
            throw new common_1.BadRequestException(constants_1.MESSAGE.ERROR.INVALID_UUID_FORMAT);
        }
        return value;
    }
};
exports.UuidValidationPipe = UuidValidationPipe = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UuidValidationPipe);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decryptWithKey = exports.encryptWithRandomKey = void 0;
const crypto_js_1 = __webpack_require__(35);
const index_1 = __webpack_require__(8);
function generateKey() {
    return crypto_js_1.lib.WordArray.random(128 / 8).toString(crypto_js_1.enc.Hex);
}
function encrypt(text, secretKey) {
    return crypto_js_1.AES.encrypt(text, secretKey).toString();
}
function decrypt(encryptedText, secretKey) {
    const bytes = crypto_js_1.AES.decrypt(encryptedText, secretKey);
    return bytes.toString(crypto_js_1.enc.Utf8);
}
function encryptWithRandomKey(text) {
    const secretKey = generateKey();
    const encrypted = encrypt(text, secretKey);
    const hmac = (0, crypto_js_1.HmacSHA256)(encrypted, secretKey).toString();
    return `${secretKey}.${hmac}.${encrypted}`;
}
exports.encryptWithRandomKey = encryptWithRandomKey;
function decryptWithKey(encryptedTextWithKey) {
    const [secretKey, hmac, encryptedText] = encryptedTextWithKey.split('.', 3);
    if (!secretKey || !encryptedText || !hmac) {
        throw new Error(index_1.MESSAGE.ERROR.INVALID_CIPHER_FORMAT);
    }
    const verifiedHmac = (0, crypto_js_1.HmacSHA256)(encryptedText, secretKey).toString();
    if (hmac !== verifiedHmac) {
        throw new Error(index_1.MESSAGE.ERROR.INVALID_HMAC);
    }
    return decrypt(encryptedText, secretKey);
}
exports.decryptWithKey = decryptWithKey;


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeormModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const typeorm_service_1 = __webpack_require__(38);
let TypeormModule = exports.TypeormModule = class TypeormModule {
};
exports.TypeormModule = TypeormModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [typeorm_service_1.TypeormService],
        exports: [typeorm_service_1.TypeormService],
    })
], TypeormModule);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeormService = void 0;
const tslib_1 = __webpack_require__(2);
const endpoints_1 = __webpack_require__(1);
const common_1 = __webpack_require__(15);
const config_1 = __webpack_require__(39);
const typeorm_1 = __webpack_require__(40);
let TypeormService = exports.TypeormService = class TypeormService {
    constructor(configService) {
        this.configService = configService;
        this.appDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, this.configService.get('database')), { entities: endpoints_1.ExposedEntities }));
    }
    async onModuleInit() {
        await this.appDataSource.initialize();
    }
    async onModuleDestroy() {
        await this.appDataSource.destroy();
    }
    async cleanDatabase() {
        if (process.env['NODE_ENV'] === 'production') {
            console.warn('Database cleaning is skipped in production!');
            return;
        }
        const queryRunner = this.appDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            for (const entity of this.appDataSource.entityMetadatas) {
                await queryRunner.query(`TRUNCATE TABLE "${entity.tableName}" CASCADE;`);
            }
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw new Error(`ERROR: Cleaning test db: ${error}`);
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.TypeormService = TypeormService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], TypeormService);


/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isProduction = void 0;
function isProduction() {
    return process.env['NODE_ENV'] === 'production';
}
exports.isProduction = isProduction;


/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const tslib_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(40);
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
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntityService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
class BaseEntityService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        return this.repository.find();
    }
    async findById(id) {
        const entity = await this.repository.findOneBy({ id });
        if (!entity) {
            throw new common_2.NotFoundException(common_1.MESSAGE.ERROR.ENTITY_WITH_ID_DOES_NOT_EXIST(id));
        }
        return entity;
    }
    async create(createDto) {
        const entity = this.repository.create(createDto);
        return this.repository.save(entity);
    }
    async updatePatch(id, updateDto) {
        const entity = await this.repository.findOneBy({ id: id });
        if (!entity) {
            throw new common_2.NotFoundException(common_1.MESSAGE.ERROR.ENTITY_WITH_ID_DOES_NOT_EXIST(id));
        }
        this.repository.merge(entity, updateDto);
        return this.repository.save(entity);
    }
    async updatePut(id, createDto) {
        const entityExists = await this.repository.findOneBy({ id: id });
        if (!entityExists) {
            throw new common_2.NotFoundException(common_1.MESSAGE.ERROR.ENTITY_WITH_ID_DOES_NOT_EXIST(id));
        }
        const updatedEntity = this.repository.create(createDto);
        updatedEntity.id = id;
        return this.repository.save(updatedEntity);
    }
    findOneBy(partialItem) {
        return this.repository.findOneBy(partialItem);
    }
    async remove(id) {
        try {
            const result = await this.repository.delete(id);
            if (result.affected === 0) {
                throw new common_2.NotFoundException(common_1.MESSAGE.ERROR.ENTITY_WITH_ID_DOES_NOT_EXIST(id));
            }
        }
        catch (error) {
            if (error.code === common_1.DB_ERROR_CODE.FOREIGN_KEY_VIOLATION) {
                throw new common_2.ConflictException(common_1.MESSAGE.ERROR.FOREIGN_KEY_VIOLATION);
            }
            throw error;
        }
    }
}
exports.BaseEntityService = BaseEntityService;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseViewModel = void 0;
const tslib_1 = __webpack_require__(2);
const class_transformer_1 = __webpack_require__(18);
class BaseViewModel {
}
exports.BaseViewModel = BaseViewModel;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", String)
], BaseViewModel.prototype, "id", void 0);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseCreateDto = void 0;
const tslib_1 = __webpack_require__(2);
const class_transformer_1 = __webpack_require__(18);
class BaseCreateDto {
}
exports.BaseCreateDto = BaseCreateDto;
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    tslib_1.__metadata("design:type", String)
], BaseCreateDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseCreateDto.prototype, "createdDate", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Exclude)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseCreateDto.prototype, "updatedDate", void 0);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseRepository = void 0;
const typeorm_1 = __webpack_require__(40);
class BaseRepository extends typeorm_1.Repository {
    constructor(repo) {
        super(repo.target, repo.manager, repo.queryRunner);
    }
}
exports.BaseRepository = BaseRepository;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const class_transformer_1 = __webpack_require__(18);
class BaseController {
    constructor(service, viewModelClass, createDtoClass, updateDtoClass) {
        this.service = service;
        this.viewModelClass = viewModelClass;
        this.createDtoClass = createDtoClass;
        this.updateDtoClass = updateDtoClass;
    }
    async create(createDto) {
        const dto = (0, class_transformer_1.plainToInstance)(this.createDtoClass, createDto);
        const entity = await this.service.create(dto);
        return (0, class_transformer_1.plainToInstance)(this.viewModelClass, entity);
    }
    async getById(id) {
        const entity = await this.service.findById(id);
        return (0, class_transformer_1.plainToInstance)(this.viewModelClass, entity);
    }
    async updatePartial(id, updateDto) {
        const dto = (0, class_transformer_1.plainToInstance)(this.updateDtoClass, updateDto);
        const entity = await this.service.updatePatch(id, dto);
        return (0, class_transformer_1.plainToInstance)(this.viewModelClass, entity);
    }
    async update(id, createDto) {
        const dto = (0, class_transformer_1.plainToInstance)(this.createDtoClass, createDto);
        const entity = await this.service.updatePut(id, dto);
        return (0, class_transformer_1.plainToInstance)(this.viewModelClass, entity);
    }
    async remove(id) {
        return await this.service.remove(id);
    }
    findAll() {
        return this.service.findAll();
    }
}
exports.BaseController = BaseController;
tslib_1.__decorate([
    (0, common_2.Post)(),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], BaseController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_2.Get)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id', common_1.UuidValidationPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BaseController.prototype, "getById", null);
tslib_1.__decorate([
    (0, common_2.Patch)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id', common_1.UuidValidationPipe)),
    tslib_1.__param(1, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], BaseController.prototype, "updatePartial", null);
tslib_1.__decorate([
    (0, common_2.Put)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id', common_1.UuidValidationPipe)),
    tslib_1.__param(1, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BaseController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_2.Delete)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id', common_1.UuidValidationPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], BaseController.prototype, "remove", null);
tslib_1.__decorate([
    (0, common_2.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], BaseController.prototype, "findAll", null);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.baseSchema = void 0;
const zod_1 = __webpack_require__(52);
exports.baseSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});


/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("zod");

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePersonDto = void 0;
const mapped_types_1 = __webpack_require__(54);
const create_person_dto_1 = __webpack_require__(7);
class UpdatePersonDto extends (0, mapped_types_1.PartialType)(create_person_dto_1.CreatePersonDto) {
}
exports.UpdatePersonDto = UpdatePersonDto;


/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonVm = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const class_transformer_1 = __webpack_require__(18);
const base_1 = __webpack_require__(44);
class PersonVm extends base_1.BaseViewModel {
}
exports.PersonVm = PersonVm;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof common_1.Nullable !== "undefined" && common_1.Nullable) === "function" ? _a : Object)
], PersonVm.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof common_1.Nullable !== "undefined" && common_1.Nullable) === "function" ? _b : Object)
], PersonVm.prototype, "lastName", void 0);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.personVmSchema = void 0;
const zod_1 = __webpack_require__(52);
const base_1 = __webpack_require__(44);
exports.personVmSchema = base_1.baseSchema
    .extend({
    firstName: zod_1.z.string().nullable(),
    lastName: zod_1.z.string().nullable(),
})
    .strict();


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(58);
const person_repository_service_1 = __webpack_require__(59);
const person_controller_1 = __webpack_require__(61);
const person_entity_1 = __webpack_require__(60);
const person_service_1 = __webpack_require__(63);
let PersonModule = exports.PersonModule = class PersonModule {
};
exports.PersonModule = PersonModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([person_entity_1.Person])],
        controllers: [person_controller_1.PersonController],
        providers: [person_service_1.PersonService, person_repository_service_1.PersonRepository],
    })
], PersonModule);


/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonRepository = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(58);
const typeorm_2 = __webpack_require__(40);
const base_1 = __webpack_require__(44);
const person_entity_1 = __webpack_require__(60);
let PersonRepository = exports.PersonRepository = class PersonRepository extends base_1.BaseRepository {
    constructor(repo) {
        super(repo);
    }
    async findAll() {
        return this.find();
    }
};
exports.PersonRepository = PersonRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(person_entity_1.Person)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PersonRepository);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Person = void 0;
const tslib_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(40);
const base_1 = __webpack_require__(44);
let Person = exports.Person = class Person extends base_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.firstName = null;
        this.lastName = null;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "lastName", void 0);
exports.Person = Person = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Person);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const swagger_1 = __webpack_require__(62);
const base_1 = __webpack_require__(44);
const models_1 = __webpack_require__(6);
const person_service_1 = __webpack_require__(63);
let PersonController = exports.PersonController = class PersonController extends base_1.BaseController {
    constructor(personService) {
        super(personService, models_1.PersonVm, models_1.CreatePersonDto, models_1.UpdatePersonDto);
        this.personService = personService;
    }
};
exports.PersonController = PersonController = tslib_1.__decorate([
    (0, common_2.Controller)('persons'),
    (0, common_1.Serialize)(models_1.PersonVm),
    (0, swagger_1.ApiTags)('Person'),
    (0, swagger_1.ApiBearerAuth)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof person_service_1.PersonService !== "undefined" && person_service_1.PersonService) === "function" ? _a : Object])
], PersonController);


/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const base_1 = __webpack_require__(44);
const person_repository_service_1 = __webpack_require__(59);
let PersonService = exports.PersonService = class PersonService extends base_1.BaseEntityService {
    constructor(personRepository) {
        super(personRepository);
        this.personRepository = personRepository;
    }
};
exports.PersonService = PersonService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof person_repository_service_1.PersonRepository !== "undefined" && person_repository_service_1.PersonRepository) === "function" ? _a : Object])
], PersonService);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(70), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserVm = void 0;
const tslib_1 = __webpack_require__(2);
const class_transformer_1 = __webpack_require__(18);
const base_1 = __webpack_require__(44);
const person_1 = __webpack_require__(5);
class UserVm extends base_1.BaseViewModel {
}
exports.UserVm = UserVm;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", String)
], UserVm.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Type)(() => person_1.PersonVm),
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof person_1.PersonVm !== "undefined" && person_1.PersonVm) === "function" ? _a : Object)
], UserVm.prototype, "person", void 0);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userVmSchema = void 0;
const zod_1 = __webpack_require__(52);
const base_1 = __webpack_require__(44);
const person_1 = __webpack_require__(5);
exports.userVmSchema = base_1.baseSchema
    .extend({
    email: zod_1.z.string().email(),
    person: person_1.personVmSchema,
})
    .strict();


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const swagger_1 = __webpack_require__(62);
const class_validator_1 = __webpack_require__(43);
const base_1 = __webpack_require__(44);
class CreateUserDto extends base_1.BaseCreateDto {
}
exports.CreateUserDto = CreateUserDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.Matches)(common_1.EMAIL_REGEXP, {
        message: common_1.MESSAGE.VALIDATION.USERNAME_MUST_BE_EMAIL,
    }),
    (0, swagger_1.ApiProperty)({
        minLength: 4,
        maxLength: 30,
        pattern: common_1.MESSAGE.VALIDATION.USERNAME_MUST_BE_EMAIL,
        example: 'test@test.com',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'StrongPassword123',
        format: 'password',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(54);
const create_user_dto_1 = __webpack_require__(68);
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(58);
const user_entity_1 = __webpack_require__(71);
const users_repository_service_1 = __webpack_require__(72);
const users_controller_1 = __webpack_require__(73);
const users_service_1 = __webpack_require__(74);
let UsersModule = exports.UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        providers: [users_service_1.UsersService, users_repository_service_1.UsersRepository],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(40);
const base_1 = __webpack_require__(44);
const person_1 = __webpack_require__(5);
let User = exports.User = class User extends base_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.hashedRt = null;
    }
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "hash", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "hashedRt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => person_1.Person, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof person_1.Person !== "undefined" && person_1.Person) === "function" ? _a : Object)
], User.prototype, "person", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(58);
const typeorm_2 = __webpack_require__(40);
const base_1 = __webpack_require__(44);
const user_entity_1 = __webpack_require__(71);
let UsersRepository = exports.UsersRepository = class UsersRepository extends base_1.BaseRepository {
    constructor(repo) {
        super(repo);
    }
    async findAll() {
        return this.find();
    }
};
exports.UsersRepository = UsersRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersRepository);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const swagger_1 = __webpack_require__(62);
const base_1 = __webpack_require__(44);
const models_1 = __webpack_require__(65);
const users_service_1 = __webpack_require__(74);
let UsersController = exports.UsersController = class UsersController extends base_1.BaseController {
    constructor(usersService) {
        super(usersService, models_1.UserVm, models_1.CreateUserDto, models_1.UpdateUserDto);
        this.usersService = usersService;
    }
    create(authCredentialsDto) {
        return this.usersService.create(authCredentialsDto);
    }
};
tslib_1.__decorate([
    (0, common_2.Post)(),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof models_1.CreateUserDto !== "undefined" && models_1.CreateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "create", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, common_2.Controller)('users'),
    (0, common_1.Serialize)(models_1.UserVm),
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const utils_1 = __webpack_require__(75);
const common_2 = __webpack_require__(15);
const base_1 = __webpack_require__(44);
const helpers_1 = __webpack_require__(82);
const person_1 = __webpack_require__(5);
const user_entity_1 = __webpack_require__(71);
const users_repository_service_1 = __webpack_require__(72);
let UsersService = exports.UsersService = class UsersService extends base_1.BaseEntityService {
    constructor(usersRepository) {
        super(usersRepository);
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const decryptedPassword = (0, helpers_1.passwordHandler)(createUserDto.password);
        const newUser = new user_entity_1.User();
        newUser.email = createUserDto.email;
        newUser.hash = (0, utils_1.hashIt)(decryptedPassword);
        newUser.person = new person_1.Person();
        try {
            const storedUser = await this.usersRepository.save(newUser);
            const { hash, hashedRt } = storedUser, userWithoutPassword = tslib_1.__rest(storedUser, ["hash", "hashedRt"]);
            return userWithoutPassword;
        }
        catch (error) {
            if (error.code === common_1.DB_ERROR_CODE.UNIQUE_VIOLATION) {
                throw new common_2.ConflictException(common_1.MESSAGE.ERROR.USERNAME_EXIST);
            }
            else {
                throw new common_2.InternalServerErrorException();
            }
        }
    }
    async updateRt(userId, hashedRt) {
        return await this.usersRepository.update(userId, { hashedRt });
    }
};
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_repository_service_1.UsersRepository !== "undefined" && users_repository_service_1.UsersRepository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(77), exports);


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.comparePasswords = exports.hashIt = void 0;
const bcrypt = __webpack_require__(78);
function hashIt(rawPassword) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPassword, salt);
}
exports.hashIt = hashIt;
function comparePasswords(rawPassword, hash) {
    return bcrypt.compareSync(rawPassword, hash);
}
exports.comparePasswords = comparePasswords;


/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const nestjs_pino_1 = __webpack_require__(81);
let LoggerModule = exports.LoggerModule = class LoggerModule {
};
exports.LoggerModule = LoggerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                forRoutes: ['*'],
                pinoHttp: {
                    customProps: () => ({
                        context: 'HTTP',
                    }),
                    autoLogging: true,
                    transport: {
                        target: process.env['NODE_ENV'] === 'test'
                            ? 'pino-pretty'
                            : `${__dirname}/../../../pino-pretty-transport.js`,
                        options: {
                            colorizeObjects: true,
                            messageFormat: '{context}{msg} ',
                            singleLine: true,
                        },
                    },
                },
            }),
        ],
    })
], LoggerModule);


/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.passwordHandler = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
function passwordHandler(encryptedPasswordWithKey, skipStrengthValidation = false) {
    let decryptedPassword;
    try {
        decryptedPassword = (0, common_1.decryptWithKey)(encryptedPasswordWithKey);
    }
    catch (error) {
        throw new common_2.BadRequestException(common_1.MESSAGE.ERROR.DATA_VERIFICATION_FAILED);
    }
    if (!skipStrengthValidation && !common_1.PASSWORD_REGEXP.test(decryptedPassword)) {
        throw new common_2.BadRequestException(common_1.MESSAGE.VALIDATION.WEAK_PASSWORD);
    }
    return decryptedPassword;
}
exports.passwordHandler = passwordHandler;


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndpointsModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const auth_module_1 = __webpack_require__(85);
const clean_db_module_1 = __webpack_require__(98);
const person_1 = __webpack_require__(5);
const users_1 = __webpack_require__(64);
let EndpointsModule = exports.EndpointsModule = class EndpointsModule {
};
exports.EndpointsModule = EndpointsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [users_1.UsersModule, auth_module_1.AuthModule, person_1.PersonModule, clean_db_module_1.CleanDbModule],
    })
], EndpointsModule);


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const core_1 = __webpack_require__(24);
const jwt_1 = __webpack_require__(86);
const passport_1 = __webpack_require__(25);
const users_1 = __webpack_require__(64);
const auth_controller_1 = __webpack_require__(87);
const auth_service_1 = __webpack_require__(88);
const strategies_1 = __webpack_require__(94);
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_2.Module)({
        controllers: [auth_controller_1.AuthController],
        imports: [
            users_1.UsersModule,
            passport_1.PassportModule.register({ session: true }),
            jwt_1.JwtModule.register({}),
        ],
        providers: [
            auth_service_1.AuthService,
            strategies_1.AtStrategy,
            strategies_1.RtStrategy,
            {
                provide: core_1.APP_GUARD,
                useClass: common_1.AtGuard,
            },
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 86 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const swagger_1 = __webpack_require__(62);
const users_1 = __webpack_require__(64);
const auth_service_1 = __webpack_require__(88);
const dto_1 = __webpack_require__(89);
const types_1 = __webpack_require__(91);
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUpLocal(dto) {
        return this.authService.signUpLocal(dto);
    }
    async signInLocal(dto) {
        return this.authService.signInLocal(dto);
    }
    logout(userId) {
        return this.authService.logout(userId);
    }
    refreshTokens(userId, refreshToken) {
        return this.authService.refreshTokens(userId, refreshToken);
    }
    whoAmI(user) {
        return this.authService.getCurrentUser(user.sub);
    }
};
tslib_1.__decorate([
    (0, common_1.Public)(),
    (0, common_2.Post)('signup'),
    (0, common_2.HttpCode)(common_2.HttpStatus.CREATED),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof dto_1.AuthDto !== "undefined" && dto_1.AuthDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "signUpLocal", null);
tslib_1.__decorate([
    (0, common_1.Public)(),
    (0, common_2.Post)('signin'),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof dto_1.AuthDto !== "undefined" && dto_1.AuthDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "signInLocal", null);
tslib_1.__decorate([
    (0, common_2.Post)('logout'),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.GetCurrentUserId)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "logout", null);
tslib_1.__decorate([
    (0, common_1.Public)(),
    (0, common_2.UseGuards)(common_1.RtGuard),
    (0, common_2.Post)('refresh'),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    tslib_1.__param(0, (0, common_1.GetCurrentUserId)()),
    tslib_1.__param(1, (0, common_1.GetCurrentUser)('refreshToken')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "refreshTokens", null);
tslib_1.__decorate([
    (0, common_1.Serialize)(users_1.UserVm),
    (0, common_2.Get)('whoami'),
    tslib_1.__param(0, (0, common_1.GetCurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof types_1.JwtPayload !== "undefined" && types_1.JwtPayload) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "whoAmI", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_2.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(2);
const utils_1 = __webpack_require__(75);
const common_1 = __webpack_require__(15);
const config_1 = __webpack_require__(39);
const jwt_1 = __webpack_require__(86);
const users_1 = __webpack_require__(64);
const helpers_1 = __webpack_require__(82);
let AuthService = exports.AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async getCurrentUser(id) {
        return this.usersService.findById(id);
    }
    async signInLocal(dto) {
        const user = await this.usersService.findOneBy({ email: dto.email });
        const decryptedPassword = (0, helpers_1.passwordHandler)(dto.password, true);
        if (user && (0, utils_1.comparePasswords)(decryptedPassword, user.hash)) {
            const tokens = await this.getTokens(user.id, user.email);
            await this.updateRtHash(user.id, tokens.refreshToken);
            return tokens;
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    async signUpLocal(dto) {
        const newUser = await this.usersService.create(dto);
        const tokens = await this.getTokens(newUser.id, newUser.email);
        await this.updateRtHash(newUser.id, tokens.refreshToken);
        return tokens;
    }
    async logout(userId) {
        await this.usersService.updateRt(userId, null);
        return true;
    }
    async refreshTokens(userId, rt) {
        const user = await this.usersService.findOneBy({ id: userId });
        if (user && user.hashedRt && (0, utils_1.comparePasswords)(rt, user.hashedRt)) {
            const tokens = await this.getTokens(user.id, user.email);
            await this.updateRtHash(user.id, tokens.refreshToken);
            return tokens;
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    async updateRtHash(userId, rt) {
        const hash = (0, utils_1.hashIt)(rt);
        await this.usersService.updateRt(userId, hash);
    }
    async getTokens(userId, email) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                email,
            }, {
                secret: this.configService.get('AT_SECRET'),
                expiresIn: 60 * 15,
            }),
            this.jwtService.signAsync({
                sub: userId,
                email,
            }, {
                secret: this.configService.get('RT_SECRET'),
                expiresIn: 60 * 60 * 24 * 7,
            }),
        ]);
        return {
            accessToken: at,
            refreshToken: rt,
        };
    }
};
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_1.UsersService !== "undefined" && users_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthDto = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const swagger_1 = __webpack_require__(62);
const class_validator_1 = __webpack_require__(43);
class AuthDto {
}
exports.AuthDto = AuthDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.Matches)(common_1.EMAIL_REGEXP, {
        message: common_1.MESSAGE.VALIDATION.USERNAME_MUST_BE_EMAIL,
    }),
    (0, swagger_1.ApiProperty)({
        minLength: 4,
        maxLength: 30,
        pattern: common_1.MESSAGE.VALIDATION.USERNAME_MUST_BE_EMAIL,
        example: 'test@test.com',
    }),
    tslib_1.__metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        pattern: common_1.PASSWORD_REGEXP.source,
        example: 'StrongPassword123',
        format: 'password',
    }),
    tslib_1.__metadata("design:type", String)
], AuthDto.prototype, "password", void 0);


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(95), exports);
tslib_1.__exportStar(__webpack_require__(97), exports);


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RtStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const config_1 = __webpack_require__(39);
const passport_1 = __webpack_require__(25);
const passport_jwt_1 = __webpack_require__(96);
let RtStrategy = exports.RtStrategy = class RtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('RT_SECRET'),
            passReqToCallback: true,
        });
        this.configService = configService;
    }
    async validate(req, payload) {
        const refreshToken = req.headers['authorization']
            ? req.headers['authorization'].replace('Bearer ', '').trim()
            : null;
        if (!refreshToken)
            throw new common_2.ForbiddenException(common_1.MESSAGE.ERROR.REFRESH_TOKEN_MALFORMED);
        return Object.assign(Object.assign({}, payload), { refreshToken });
    }
};
exports.RtStrategy = RtStrategy = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RtStrategy);


/***/ }),
/* 96 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AtStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(15);
const config_1 = __webpack_require__(39);
const passport_1 = __webpack_require__(25);
const passport_jwt_1 = __webpack_require__(96);
let AtStrategy = exports.AtStrategy = class AtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('AT_SECRET'),
        });
        this.configService = configService;
    }
    async validate(payload) {
        return payload;
    }
};
exports.AtStrategy = AtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AtStrategy);


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CleanDbModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
const clean_db_controller_1 = __webpack_require__(99);
const controllers = [];
if (process.env['NODE_ENV'] === 'test') {
    controllers.push(clean_db_controller_1.CleanDbController);
}
let CleanDbModule = exports.CleanDbModule = class CleanDbModule {
};
exports.CleanDbModule = CleanDbModule = tslib_1.__decorate([
    (0, common_2.Module)({
        controllers: controllers,
        imports: [common_1.TypeormModule],
    })
], CleanDbModule);


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CleanDbController = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(15);
let CleanDbController = exports.CleanDbController = class CleanDbController {
    constructor(typeormService) {
        this.typeormService = typeormService;
    }
    async cleanDatabase() {
        await this.typeormService.cleanDatabase();
        return common_1.MESSAGE.INFO.DATABASE_IS_CLEANED;
    }
};
tslib_1.__decorate([
    (0, common_1.Public)(),
    (0, common_2.Delete)('clean-database'),
    (0, common_2.HttpCode)(common_2.HttpStatus.OK),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], CleanDbController.prototype, "cleanDatabase", null);
exports.CleanDbController = CleanDbController = tslib_1.__decorate([
    (0, common_2.Controller)('test'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof common_1.TypeormService !== "undefined" && common_1.TypeormService) === "function" ? _a : Object])
], CleanDbController);


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
exports.migrationsDataSource = void 0;
const endpoints_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(40);
exports.migrationsDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env['DB_HOST'] || 'localhost',
    port: parseInt(process.env['DB_PORT'], 10),
    username: process.env['DB_USERNAME'],
    password: process.env['DB_PASSWORD'],
    database: process.env['DB_DATABASE'],
    entities: endpoints_1.ExposedEntities,
    logging: true,
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;