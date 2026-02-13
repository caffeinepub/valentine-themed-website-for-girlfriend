import { useState, useRef } from 'react';
import SectionShell from './SectionShell';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Heart } from 'lucide-react';
import { valentineContent } from '@/content/valentineContent';

const MAX_IMAGES = 5;

export default function MemoryLaneSection() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];
    const filesToProcess = Array.from(files).slice(0, MAX_IMAGES - uploadedImages.length);
    
    let processedCount = 0;
    filesToProcess.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            newImages.push(event.target.result as string);
            processedCount++;
            
            // Update state only when all files are processed
            if (processedCount === filesToProcess.length) {
              setUploadedImages(prev => {
                const combined = [...prev, ...newImages];
                return combined.slice(0, MAX_IMAGES);
              });
            }
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const slots = valentineContent.memoryLane.captions.map((caption, index) => ({
    caption,
    image: uploadedImages[index] || null
  }));

  return (
    <SectionShell className="bg-gradient-to-b from-rose-50 via-white to-rose-50 dark:from-rose-950/20 dark:via-background dark:to-rose-950/20">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-rose-900 dark:text-rose-100">
            {valentineContent.memoryLane.title}
          </h2>
          <p className="text-lg text-rose-600 dark:text-rose-400 font-serif italic">
            {valentineContent.memoryLane.subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleUploadClick}
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
            disabled={uploadedImages.length >= MAX_IMAGES}
          >
            <Upload className="mr-2 h-5 w-5" />
            {uploadedImages.length >= MAX_IMAGES 
              ? 'All Slots Filled' 
              : valentineContent.memoryLane.uploadButtonText}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot, index) => (
            <Card key={index} className="overflow-hidden border-rose-200 dark:border-rose-800 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-950/40 dark:to-pink-950/40">
                  {slot.image ? (
                    <img
                      src={slot.image}
                      alt={slot.caption}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-rose-300 dark:text-rose-700" />
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white dark:bg-rose-950/20">
                  <p className="text-center text-rose-700 dark:text-rose-300 font-serif italic">
                    {slot.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
