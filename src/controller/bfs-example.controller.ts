import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { BfsExampleService } from '../bfs-example.service';
import { Response } from 'express';
import { inputToBitmap, outputToBitmap } from '../common/index';
import { example3x4 } from '../example';

@Controller('v1/bfs-example')
export class BfsExampleController {

    constructor(private readonly bfsExampleService: BfsExampleService) { }

    @Get()
    public async getBfs(@Res() res: Response) {
        try {
            const exampleSplited = example3x4.trim().split('\n');
            const [test, size, ...bitmap] = exampleSplited;
            const [rows, columns] = size.split(' ');

            const data = await this.bfsExampleService.processBfs(
                parseInt(rows, 10),
                parseInt(columns, 10),
                inputToBitmap(bitmap.toString()),
            )

            return res.status(HttpStatus.OK).send(
                outputToBitmap(data)
            )

        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send(error)
        }
    }
}