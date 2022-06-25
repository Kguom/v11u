let handler = async m => m.reply(`
╭─「 Donasi • Kredit 」
│ •  Digi (60109102974
╰────
© Khairil春
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
