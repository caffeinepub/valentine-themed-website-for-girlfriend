import SectionShell from './SectionShell';
import { Music } from 'lucide-react';
import { valentineContent } from '@/content/valentineContent';

export default function PlaylistSection() {
  return (
    <SectionShell className="bg-gradient-to-b from-rose-50 to-white dark:from-rose-950/20 dark:to-background">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Music className="w-8 h-8 text-rose-600 dark:text-rose-400" />
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-rose-900 dark:text-rose-100">
              {valentineContent.playlist.title}
            </h2>
            <Music className="w-8 h-8 text-rose-600 dark:text-rose-400" />
          </div>
          <p className="text-lg text-rose-600 dark:text-rose-400 font-serif italic">
            {valentineContent.playlist.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-200 dark:border-rose-800">
            <iframe
              src={valentineContent.playlist.embedUrl}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
              title="Spotify Playlist"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
