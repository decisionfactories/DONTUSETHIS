'use client';
import { Icon, useBreakpoint } from '@tldraw/tldraw';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export function RiskyButCoolAPIKeyInput() {
  const breakpoint = useBreakpoint();
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // Ensure localStorage is accessed only on the client side
    if (typeof window !== 'undefined') {
      const storedKey = localStorage.getItem('makeitreal_key') ?? process.env.OPENAI_API_KEY ?? '';
      setApiKey(storedKey);
    }
  }, []);

  // Store the API key locally, but ONLY in development mode
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setApiKey(value);
    localStorage.setItem('makeitreal_key', value);
  }, []);

  const handleQuestionMessage = useCallback(() => {
    window.alert(
      `If you have an OpenAI developer key, you can put it in this input and it will be used when posting to OpenAI.\n\nSee https://platform.openai.com/api-keys to get a key.\n\nPutting API keys into boxes is generally a bad idea! If you have any concerns, create an API key and then revoke it after using this site.`
    );
  }, []);

  return (
    <div className={`your-own-api-key ${breakpoint < 5 ? 'your-own-api-key__mobile' : ''}`}>
      <div className="your-own-api-key__inner">
        <div className="input__wrapper">
          <input
            id="openai_key_risky_but_cool"
            value={apiKey}
            onChange={handleChange}
            spellCheck={false}
            autoCapitalize="off"
          />
        </div>
        <button className="question__button" onClick={handleQuestionMessage}>
          <Icon icon="question" />
        </button>
      </div>
    </div>
  );
}
