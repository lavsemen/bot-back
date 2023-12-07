import {Body, Controller, Get, Post} from '@nestjs/common';
import {BookingService} from "./booking.service";
import {UserInfoDto} from "./dto/user-info.dto";

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService) {
    }
    @Post()
    public async registerBooking(@Body() userInfoDto: UserInfoDto) {
        return await this.bookingService.registerBookingRow(userInfoDto)
    }
}
