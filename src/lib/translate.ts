import { env } from '~/env.mjs';

const translate = async (text: string) => {
  try {
    const options = {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: 'es',
        target: 'en',
        format: 'text',
        api_Key: '',
      }),
    };

    const res = await fetch(
      `${env.NEXT_PUBLIC_LIBRE_TRANSLATE_BASE_URL}/translate`,
      options
    );

    const { translatedText } = (await res.json()) as { translatedText: string };

    return translatedText;
  } catch (error) {
    return '';
  }
};

export default translate;
