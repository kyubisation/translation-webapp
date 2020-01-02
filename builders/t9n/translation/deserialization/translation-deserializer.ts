import { TranslationSourceUnit } from '../translation-source-unit';
import { TranslationTargetUnit } from '../translation-target-unit';

export interface TranslationDeserializer {
  deserializeSource(
    file: string
  ): Promise<{
    language: string;
    original: string;
    unitMap: Map<string, TranslationSourceUnit>;
  }>;
  deserializeTarget(
    file: string
  ): Promise<{ language: string; unitMap: Map<string, TranslationTargetUnit> }>;
}
