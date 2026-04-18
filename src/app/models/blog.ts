export interface Block {
  blockType: 'title' | 'subTitle' | 'header' | 'subHeader' | 'paragraph' | 'author';
  content: string;
  id: string;
}
