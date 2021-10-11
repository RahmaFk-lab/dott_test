import { Injectable } from '@nestjs/common';
import { INFINITY, DIRECTIONSXY, DX, DY } from './example';

@Injectable()
export class BfsExampleService {

    /**
     * Breadth-first search (BFS).
     * @param rows
     * @param columns
     * @param bitmap
     */
    processBfs(rows: number, columns: number, bitmap: number[][]): number[][] {
        const queue: number[][] = [];
        bitmap.forEach((row: number[], rowIndex: number) => {
            return row.forEach((pixel: number, columnIndex: number) => {
                if (pixel === 1) {
                    // enqueue
                    queue.push(this.bitmapWhitePixel(rowIndex, columnIndex));
                }
            });
        });

        const resultBitmap: number[][] = this.arraySize(rows).map(() =>
            this.arraySize(columns),
        );

        const queueLength: number = queue.length;
        while (queueLength > 0 && queue[0]) {
            const currentNode: number[] = queue[0];
            const [rowIndex, columnIndex, distanceCost] = currentNode as [
                number,
                number,
                number
            ];

            if (distanceCost < resultBitmap[rowIndex][columnIndex]) {
                resultBitmap[rowIndex][columnIndex] = distanceCost;
            }

            for (
                let directionIndex = 0;
                directionIndex < DIRECTIONSXY;
                ++directionIndex
            ) {
                const newRowIndex: number = rowIndex + DX[directionIndex];
                const newColumnIndex: number = columnIndex + DY[directionIndex];
                if (
                    
                    isInEdge(newRowIndex, newColumnIndex) &&
                    isNotVisited(newRowIndex, newColumnIndex)
                ) {
                    // Set the distance from them pixel to nearest white pixel
                    resultBitmap[newRowIndex][newColumnIndex] = distanceCost + 1;
                    queue.push([newRowIndex, newColumnIndex, distanceCost + 1]);
                }
            }

            // dequeue
            queue.shift();
        }

        /**
         * Determines whether the node was not visited
         * @param x - row index
         * @param y - column index
         * @returns true if not visited
         */
        function isNotVisited(x: number, y: number): boolean {
            return resultBitmap[x][y] === INFINITY;
        }

        /**
         * Returns true if the given point is inside the boundaries of the array
         * @param x - row index
         * @param y - column index
         * @returns true if in boundaries
         */
        function isInEdge(x: number, y: number): boolean {
            return x >= 0 && x < rows && y >= 0 && y < columns;
        }

        return resultBitmap;
    }


        
    arraySize(count: number): number[] {
        const array = new Array(count);
        array.fill(INFINITY);
        return array;
    }

    /**
     * Creates a white pixel in position and default distance to itself (0)
     * @param rowIndex: position in a row
     * @param columnIndex: position in a column
     * @returns white pixel node
     */
    bitmapWhitePixel(rowIndex: number, columnIndex: number): number[] {
        const distanceCost = 0;
        return [rowIndex, columnIndex, distanceCost];
    }

}