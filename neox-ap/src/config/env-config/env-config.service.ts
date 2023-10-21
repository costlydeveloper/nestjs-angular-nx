import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';

@Injectable()
export class EnvConfigService {
  constructor(private configService: ConfigService) {}

  get(key: string): string | undefined {
    return this.configService.get(key);
  }
}
