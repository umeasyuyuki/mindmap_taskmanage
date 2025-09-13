# NeonMind Tasks

マインドマップ型のタスク管理アプリです。React + TypeScript + Vite をベースに、近未来的なネオングラデとガラスモーフィズムのデザインで、キーボード中心の快適な操作感を目指します。

## 技術スタック
- React / TypeScript / Vite
- Tailwind CSS, Radix UI
- React Flow, elkjs
- Zustand
- Motion (framer-motion)
- react-hotkeys-hook
- localForage
- html-to-image
- lucide-react

## 画面構成
1. **TopBar**: ボード名、検索、レイアウト切替、Undo/Redo、Import/Export など
2. **MindMapCanvas**: ルートノードを中心に配置したマインドマップキャンバス
3. **Inspector**: 右サイドの詳細パネル
4. **CommandPalette**: Cmd/Ctrl+K で起動するコマンドパレット

## ノード仕様
```ts
Node {
  id: string;
  parentId?: string;
  title: string;
  note?: string;
  status: 'todo' | 'doing' | 'done';
  priority?: 'low' | 'med' | 'high';
  dueDate?: string;
  tags?: string[];
  collapsed?: boolean;
  color?: string;
}
```

## 操作例
- Enter: 兄弟ノードを追加
- Tab / Shift+Tab: 子ノード追加 / 親の兄弟としてアウトデント
- Backspace/Delete: ノード削除
- Cmd/Ctrl+Z / Shift+Cmd/Ctrl+Z: Undo / Redo
- Cmd/Ctrl+K: コマンドパレット

## 永続化 / エクスポート
- localForage によるオートセーブ
- JSON / PNG / SVG の Import / Export

このリポジトリはまだ初期段階であり、UI や機能は順次実装予定です。
