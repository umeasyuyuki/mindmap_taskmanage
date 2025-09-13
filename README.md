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

## 開発環境の準備と UI を表示する手順

高校生でも迷わないように、最低限の手順をまとめました。

1. **Node.js をインストール**
   - 推奨バージョンは 18 以上です。
2. **リポジトリのフォルダに移動**
   - 例: `cd mindmap_taskmanage`
3. **依存関係をインストール**
   - コマンド: `npm install`
4. **テストを実行して確認**

5. **開発サーバーを起動**
   - コマンド: `npm run dev`
   - `http://localhost:5173` のような URL が表示されます。
6. **ブラウザで表示**
   - 表示された URL をブラウザで開くと UI が確認できます。

テストや開発サーバーが動かない場合は、Node.js のバージョンやエラーメッセージを確認してみてください。
