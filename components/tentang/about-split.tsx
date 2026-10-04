import Image from "next/image";

export function AboutSplit() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg shadow-forest-950/10">
        <Image
          src="/images/bangunjiwa/kajian-quran.jpg"
          alt="Kajian Al-Qur'an bersama santri Bangunjiwa"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-forest-600 dark:text-sage-300">
          Tentang Kami
        </p>
        <h2 className="text-balance font-heading text-2xl font-bold text-foreground sm:text-3xl">
          Rumah kedua bagi mahasantri, sekaligus dapur SDM riset ekologi
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          PPM Riset Ekologi Bangunjiwa berawal sebagai Pesantren Mahasiswa yang menaungi mahasantri untuk
          menyeimbangkan keilmuan duniawi dan ukhrowi. Kini, Bangunjiwa berkembang menjadi pusat
          pendidikan yang juga mencetak sumber daya manusia untuk mengelola ekosistem riset ekologi
          MRV Nexus.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Di sini, mahasantri tidak hanya belajar tahsin, tahfidz, dan kitab kuning, tetapi juga
          dibina menguasai IT, pemetaan (GIS), dan pengelolaan SDM survei — sambil tetap menjalankan
          peran mereka sebagai mahasiswa aktif di kampus masing-masing.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Bangunjiwa menjadi jembatan bagi mahasantri untuk melaksanakan pengabdian masyarakat secara
          nyata: turun ke DAS dan kawasan hutan sosial sebagai enumerator, pengelola data, dan
          pemetaan bersama MRV Nexus, menerapkan semangat ta&apos;awanu &apos;ala al-birri wat taqwa
          dalam kehidupan sehari-hari.
        </p>
      </div>
    </div>
  );
}
