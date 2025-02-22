document.addEventListener('DOMContentLoaded', () => {
    const vConsoleUrl = "https://unpkg.com/vconsole@latest/dist/vconsole.min.js";
    const vConsoleBookmarkletVer = '1.0';
    const bookmarklet = document.getElementById('bookmarklet');

    if (!bookmarklet) {
        console.error("❌ 'bookmarklet' IDの要素が見つかりません");
        return;
    }

    const bookmarkletCode = `
        javascript:(function() {
            try {
                const vConsoleBookmarkletVer = '${vConsoleBookmarkletVer}';
                const message = '\\n\\n---\\nvConsole Bookmarklet v' + vConsoleBookmarkletVer + ' by @ogatomo21';
                if (window.VConsole) {
                    alert('vConsoleは既に読み込まれています。' + message);
                    return;
                }
                const script = document.createElement('script');
                script.src = '${vConsoleUrl}';
                script.onload = function() {
                    console.log('vConsole Bookmarklet v' + vConsoleBookmarkletVer + ' by @ogatomo21');
                    new VConsole();
                };
                script.onerror = function() {
                    alert('vConsoleの読み込みに失敗しました。\nCSPでブロックされている可能性があります。もしこれが自身のサイトの場合は「unpkg.com」を許可してください。');
                };
                document.head.appendChild(script);
            } catch (e) {
                alert('vConsoleの読み込みに失敗しました。\\n\\n' + e + message);
            }
        })();
    `;

    bookmarklet.href = bookmarkletCode.replace(/\s+/g, ' ');
    bookmarklet.textContent = 'vConsole Bookmarklet v' + vConsoleBookmarkletVer;
});
