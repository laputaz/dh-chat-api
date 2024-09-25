import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY, ORGANIZATION_ID } from './const';

/** init openai */
export const initOpenai = () => {
  const configuration = new Configuration({
    organization: ORGANIZATION_ID,
    apiKey: OPENAI_API_KEY,
  });
  return new OpenAIApi(configuration);
};

/** openai instance */
export const openai = initOpenai();
