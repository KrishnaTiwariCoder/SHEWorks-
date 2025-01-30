"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Phone } from 'lucide-react';

interface HelpRequest {
  problemType: string;
  description: string;
  authority: string;
}

export default function GetHelpPage() {
  const [formData, setFormData] = useState<HelpRequest>({
    problemType: '',
    description: '',
    authority: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this to an API
      console.log('Help Request:', formData);
      setShowSuccess(true);
      setFormData({ problemType: '', description: '', authority: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const problemTypes = [
    { value: 'emergency', label: 'Emergency' },
    { value: 'safety', label: 'Safety Concern' },
    { value: 'harassment', label: 'Harassment' },
    { value: 'domestic', label: 'Domestic Violence' },
    { value: 'other', label: 'Other' },
  ];

  const authorities = [
    { value: 'police', label: 'Police' },
    { value: 'womenhelpline', label: 'Women Helpline' },
    { value: 'ngo', label: 'NGO' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Get Help</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="problemType">Problem Type</Label>
                <Select
                  value={formData.problemType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, problemType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Problem Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {problemTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Brief Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Please describe your situation..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="authority">Authority to Contact</Label>
                <Select
                  value={formData.authority}
                  onValueChange={(value) =>
                    setFormData({ ...formData, authority: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Authority" />
                  </SelectTrigger>
                  <SelectContent>
                    {authorities.map((authority) => (
                      <SelectItem key={authority.value} value={authority.value}>
                        {authority.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>

            {showSuccess && (
              <Alert className="mt-6">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your help request has been submitted. If this is an emergency,
                  please also call the emergency numbers listed below.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <Card className="bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contact Numbers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Police:</span>
                <span className="font-semibold">100</span>
              </p>
              <p className="flex justify-between">
                <span>Women Helpline:</span>
                <span className="font-semibold">1091</span>
              </p>
              <p className="flex justify-between">
                <span>Emergency Services:</span>
                <span className="font-semibold">112</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}