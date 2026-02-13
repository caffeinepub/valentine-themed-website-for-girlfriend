import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { valentineContent } from '@/content/valentineContent';

interface SweetResponseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SweetResponseModal({ open, onOpenChange }: SweetResponseModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 border-rose-300 dark:border-rose-700">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-rose-900 dark:text-rose-100 text-center">
            {valentineContent.closing.responseTitle}
          </DialogTitle>
          <DialogDescription className="text-lg text-rose-700 dark:text-rose-300 text-center pt-4 leading-relaxed">
            {valentineContent.closing.responseMessage}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center py-6">
          <div className="text-6xl animate-bounce">
            💕
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
