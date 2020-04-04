import React from 'react';
import Markdown from 'markdown-to-jsx';
import file from '../../notion_markdown/OpenSourceMedicalSupplies.md';

export default () => (<Markdown>{file}</Markdown>);
