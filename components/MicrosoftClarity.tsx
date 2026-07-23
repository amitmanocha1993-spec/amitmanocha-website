'use client';

import { useEffect } from 'react';

export default function MicrosoftClarity() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

    if (!projectId) {
      console.warn('Microsoft Clarity Project ID not found. Skipping initialization.');
      return;
    }

    // Check if Clarity is already initialized to prevent duplicate loading
    if (typeof window !== 'undefined' && (window as any).clarity) {
      return;
    }

    // Inject Microsoft Clarity script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${projectId}");
    `;

    document.head.appendChild(script);

    // Cleanup function to remove script on unmount (optional)
    return () => {
      const existingScript = document.querySelector(`script[src*="clarity.ms/tag/${projectId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
