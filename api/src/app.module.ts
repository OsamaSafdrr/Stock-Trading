import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TradesModule } from './trades/trades-module';
import { PortfolioModule } from './portfolio/portfolio-module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TradesModule,
    PortfolioModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}