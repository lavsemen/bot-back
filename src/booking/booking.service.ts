import { Injectable } from '@nestjs/common';
import {GoogleSheetConnectorService} from "../google-auth";
import {UserInfoDto} from "./dto/user-info.dto";
import * as process from 'process'
import {ConfigService} from "@nestjs/config";

@Injectable()
export class BookingService {
    constructor(
        private googleSheetConnectorService: GoogleSheetConnectorService,
        private configService: ConfigService
    ) {}


    private mapUserInfo(userInfoDto: UserInfoDto): any[][] {
        return [
            [userInfoDto.name, userInfoDto.date, userInfoDto.direction, userInfoDto.phone, userInfoDto.telegram]
        ]
    }

    async registerBookingRow(userInfoDto: UserInfoDto) {
        return await this.googleSheetConnectorService.addRow(
            this.configService.get('GOOGLE_TABLE_ID'),
            'A1:F2',
            this.mapUserInfo(userInfoDto)
        )
    }
}
