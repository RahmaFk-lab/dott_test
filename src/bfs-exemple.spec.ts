import { Test, TestingModule } from '@nestjs/testing';
import { BfsExampleService } from './bfs-example.service';
import { INFINITY } from './example';

describe('BfsExampleService', () => {
  let service: BfsExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BfsExampleService],
    }).compile();

    service = module.get<BfsExampleService>(BfsExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Test 3x4 bitmaps', () => {
  let service: BfsExampleService;
  const rows = 3;
  const columns = 4;

  const assertions = [
    {
      bitmap: [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]],
      expected: [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]],
    },
    {
      bitmap: [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
      expected: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    },
    {
      bitmap: [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0]],
      expected: [[3, 2, 1, 0], [2, 1, 0, 1], [1, 0, 1, 2]],
    },
    {
      bitmap: [[1, 0, 0, 1], [1, 0, 0, 1], [1, 0, 0, 1]],
      expected: [[0, 1, 1, 0], [0, 1, 1, 0], [0, 1, 1, 0]],
    },
    {
      bitmap: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      expected: [
        [INFINITY, INFINITY, INFINITY, INFINITY],
        [INFINITY, INFINITY, INFINITY, INFINITY],
        [INFINITY, INFINITY, INFINITY, INFINITY],
      ],
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected bitmap: ${expected}`, async () => {
      service = new BfsExampleService();
      const result = await service.processBfs(rows, columns, bitmap);
      expect(result).toBeDefined();
    });
  });
});