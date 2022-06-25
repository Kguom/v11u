let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/8ab144aef48c60aed36ca.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '60109102984@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/8ab144aef48c60aed36ca.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/8ab144aef48c60aed36ca.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
╭──「 *_SEWABOT_* 」
│❏  1 Minggu : RM 5.00
│❏  1 Bulan : RM 10.00
╰────
╭─ [ *_KELEBIHAN BOT_* ]
│❏  On 24 Jam
│❏  Fitur Lengkap
╰────
╭─[ *_Keuntungan_* ]
│❏  Antilink ( Auto Kick )
│❏  Welcome Image
│❏  Leave Image
│❏  Cocok Buat Jaga Grup
│❏  Dan Ratusan Fitur Lainnya
╰────
╭─[ *_MINAT CHAT_* ]
│❏  🪀 wa.me/60109102984
╰────

╭──「 *_JADIBOT + OWNER_* 」
│❏   RM 20.00
╰────
╭─ [ *_FASILITAS_* ]
│❏  Cuma Scan QR Doang
│❏  Fitur Bot Nya Banyak
│❏  Banyak Fitur Langka
╰────
╭─[ *_KEUNTUNGAN_* ]
│❏  Bisa Open Sewabot
│❏  Nama Bot + Owner
│❏  Bisa Dapat Cuan
╰────
╭─[ *_MINAT CHAT_* ]
│❏  🪀 wa.me/60109102984
╰──── 

╭─[ *_PEMBAYARAN_*  ]
│❏  Via Digi 0109102984
╰────────────
©Khairil春

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `60109102984@s.whatsapp.net`
  },
  footerText: 'https://github.com/KhairilOFC',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
