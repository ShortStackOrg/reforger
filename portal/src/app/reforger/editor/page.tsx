import { Suspense } from 'react';

import EditorPageClient from './pageClient';

const EditorPage = () => (
  <Suspense fallback={<div className="p-6 text-slate-600">Loading editor...</div>}>
    <EditorPageClient />
  </Suspense>
);

export default EditorPage;
