import React from 'react';
import { memo } from 'react';
import Paragrap from './paragrap';

// 1. useEffect(callback) ít dùng
// - Gọi callback mỗi khi re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi 1 lần sau khi component được mounted
// 3. useEffect(callback, [depc])
// - Callback sẽ được gọi lại mỗi khi depc thay đổi

// ----------------------------------------------------------------
// 1. Callback luôn được gọi sau khi component được mounted
// 2. Cleanup function luôn được gọi trước khi component được mounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi lại (trừ lần mounted)

function Content() {
  return (
    <div>
      <Paragrap />
    </div>
  );
}

export default memo(Content);
