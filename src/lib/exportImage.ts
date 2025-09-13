// Placeholder for html-to-image export utilities
export async function exportPng(node: HTMLElement): Promise<string> {
  const { toPng } = await import('html-to-image');
  return toPng(node);
}

export async function exportSvg(node: HTMLElement): Promise<string> {
  const { toSvg } = await import('html-to-image');
  return toSvg(node);
}
