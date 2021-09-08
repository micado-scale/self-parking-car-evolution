import { Genome } from '../../../libs/genetic';
import { genomeStringToGenome } from '../utils/evolution';

export const BEST_GENOMES: Genome[] = [
  '1 0 1 1 1 1 0 1 0 0 1 1 0 1 1 1 1 0 0 0 1 1 1 1 1 1 0 0 0 0 1 0 1 1 1 0 0 1 1 1 1 0 1 1 1 1 0 1 0 0 1 1 0 1 0 0 1 1 0 0 0 1 1 1 0 1 0 1 0 0 1 0 1 1 1 1 0 0 0 1 1 1 0 0 0 0 0 0 1 1 0 0 1 1 1 0 1 1 1 1 1 0 0 0 1 0 0 1 1 0 1 1 0 1 0 1 0 1 0 0 1 0 0 1 0 1 1 0 1 1 1 1 0 0 0 0 1 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 1 1 1 1 0 1 1 0 1 0 1 0 0 1 0 0 0 0 0 0 1 0 0 0 0 1 1',
  '1 1 0 0 0 0 1 1 1 1 1 0 0 1 1 0 1 1 1 1 1 0 0 1 1 1 0 0 1 0 1 0 0 1 0 0 0 1 1 0 0 0 1 1 0 0 1 0 0 1 1 1 1 0 0 1 1 0 1 0 0 1 1 0 0 1 0 0 1 1 0 0 1 0 0 0 0 1 0 0 1 0 1 0 0 0 0 0 0 1 0 1 0 1 0 1 1 0 1 0 1 0 0 1 0 1 0 0 0 0 1 1 1 1 0 1 1 1 1 1 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 1 0 1 0 0 0 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 0 0 1 1 0 0 1 0 1 1 0 1 1 1 0 0 1 1 0 0 1 1 1',
  '1 0 1 0 0 1 0 0 1 0 1 0 0 1 0 1 1 1 1 0 0 1 0 0 0 0 0 1 0 0 0 0 1 1 1 1 0 0 0 1 1 0 1 1 1 0 1 1 1 0 1 0 1 1 1 1 0 1 0 1 1 1 0 0 1 0 0 1 1 1 1 1 0 1 1 0 0 0 0 0 1 0 1 0 1 0 0 1 1 1 0 1 1 1 0 0 0 1 0 0 1 0 1 1 1 1 0 1 1 1 0 0 0 1 1 1 0 0 1 1 1 1 0 1 1 0 0 1 1 1 1 0 0 0 0 1 0 1 1 0 1 0 1 1 0 0 1 0 1 0 1 1 1 1 1 1 0 1 0 0 0 1 1 0 1 1 0 1 0 0 0 0 0 0 1 0 1 1 0 0',
  '0 0 0 1 0 1 1 0 0 0 1 1 0 0 1 1 1 1 1 0 1 0 1 1 1 0 0 1 1 0 0 0 1 0 1 1 0 0 1 0 1 1 0 0 1 0 0 0 0 1 1 1 1 1 1 1 0 1 0 0 0 1 1 1 1 1 1 1 0 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0 0 1 1 1 0 0 1 0 1 0 1 1 0 1 0 0 1 1 1 0 1 1 1 0 1 1 0 1 1 1 0 0 0 0 1 0 0 1 1 0 1 0 0 1 0 1 0 0 0 0 1 0 1 1 0 1 1 0 1 0 0 1 1 1 0 0 0 0 1 1 1 0 0 0 0 1 0 1 1 0 1 0 1 0 0 0 1 0 1 1 0',
  '1 1 1 1 1 1 0 0 1 0 1 0 1 1 0 0 1 1 0 0 0 1 0 0 1 1 0 1 0 1 0 1 1 0 1 1 1 0 0 1 0 0 1 0 0 1 1 1 1 0 0 1 0 0 0 0 0 0 0 0 0 1 1 1 1 0 1 0 0 1 1 0 1 1 1 0 1 0 0 0 1 0 1 0 0 0 0 0 0 1 0 0 0 0 1 0 1 1 1 0 0 1 1 1 0 0 1 0 1 0 0 0 0 1 1 0 1 1 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 1 1 1 0 1 1 1 0 0 0 1 1 0 1 0 1 1 1 1 1 0 1 0 0 1 1 1 0 1 1 0 0 0 1 0 0 0 0 1 0 0 0 1 1 1 1',
  '0 1 0 0 1 0 0 0 1 0 0 0 1 0 0 0 1 0 0 1 0 0 1 1 1 0 1 0 0 0 0 0 0 1 1 0 0 0 1 1 1 1 1 1 0 1 1 1 1 1 1 0 0 1 1 1 1 1 1 0 0 1 0 0 0 0 0 0 1 1 0 1 1 0 0 0 1 0 1 0 1 0 0 0 1 0 1 1 0 0 0 1 1 0 1 0 1 1 0 0 0 1 1 0 1 0 0 0 1 1 1 1 1 0 0 1 0 0 0 0 1 1 1 0 0 1 1 1 1 0 0 0 1 1 1 0 0 0 0 1 0 0 0 0 1 1 1 1 0 1 1 0 1 0 0 1 0 1 1 0 1 1 1 0 0 0 1 0 1 0 1 1 0 1 1 1 1 0 1 0',
].map<Genome>((genomeString: string) => genomeStringToGenome(genomeString));
