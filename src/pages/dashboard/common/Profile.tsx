// import React, { useState } from 'react';
// import { IUser } from '@/types/user';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from '@/components/ui/dialog';
// import { Camera, Save, X, Trash2 } from 'lucide-react';
// import { useAuth } from '@/hooks/useAuth';

// const Profile = () => {
//     const currentUser = useAuth();
//     const [user, setUser] = useState<IUser>(currentUser);
//     const [isEditing, setIsEditing] = useState(false);
//     const [profileImage, setProfileImage] = useState<string>(
//         'https://i.ibb.co.com/pvTd08sn/Whats-App-Image-2025-07-28-at-19-35-44-2066225f.jpg'
//     );
//     const [showDeleteDialog, setShowDeleteDialog] = useState(false);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setUser(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSave = () => {
//         setIsEditing(false);
//     };

//     const handleCancel = () => {
//         setUser(currentUser);
//         setIsEditing(false);
//     };

//     const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setProfileImage(e.target?.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleDeleteAccount = () => {
//         // TODO: Implement account deletion logic (API call)
//         console.log('Deleting account for user:', user.id);
//         setShowDeleteDialog(false);
//         // Redirect to login or home page after deletion
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//             <div className="max-w-2xl mx-auto">
//                 <Card className="shadow-lg">
//                     <CardHeader className="text-center">
//                         <CardTitle className="text-2xl font-bold text-gray-800">
//                             Profile Settings
//                         </CardTitle>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                         {/* Profile Picture Section */}
//                         <div className="flex flex-col items-center space-y-4">
//                             <div className="relative">
//                                 <Avatar className="w-24 h-24 md:w-32 md:h-32">
//                                     <AvatarImage src={profileImage} alt="Profile" />
//                                     <AvatarFallback className="text-2xl">
//                                         {user.name.charAt(0).toUpperCase()}
//                                     </AvatarFallback>
//                                 </Avatar>
//                                 {isEditing && (
//                                     <label
//                                         htmlFor="profile-upload"
//                                         className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
//                                     >
//                                         <Camera size={16} />
//                                         <input
//                                             id="profile-upload"
//                                             type="file"
//                                             accept="image/*"
//                                             onChange={handleImageUpload}
//                                             className="hidden"
//                                         />
//                                     </label>
//                                 )}
//                             </div>
//                             <p className="text-sm text-gray-600">
//                                 Click the camera icon to change your profile picture
//                             </p>
//                         </div>

//                         {/* Form Fields */}
//                         <div className="space-y-4">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div className="space-y-2">
//                                     <Label htmlFor="name" className="text-sm font-medium">
//                                         Full Name
//                                     </Label>
//                                     <Input
//                                         id="name"
//                                         name="name"
//                                         type="text"
//                                         value={user.name}
//                                         onChange={handleInputChange}
//                                         disabled={!isEditing}
//                                         className="w-full"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <Label htmlFor="email" className="text-sm font-medium">
//                                         Email Address
//                                     </Label>
//                                     <Input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         value={user.email}
//                                         onChange={handleInputChange}
//                                         disabled={!isEditing}
//                                         className="w-full"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <Label htmlFor="phone" className="text-sm font-medium">
//                                         Phone Number
//                                     </Label>
//                                     <Input
//                                         id="phone"
//                                         name="phone"
//                                         type="tel"
//                                         value={user.phone || ''}
//                                         onChange={handleInputChange}
//                                         disabled={!isEditing}
//                                         className="w-full"
//                                         placeholder="Enter your phone number"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <Label htmlFor="address" className="text-sm font-medium">
//                                     Address
//                                 </Label>
//                                 <Input
//                                     id="address"
//                                     name="address"
//                                     type="text"
//                                     value={user.address || ''}
//                                     onChange={handleInputChange}
//                                     disabled={!isEditing}
//                                     className="w-full"
//                                     placeholder="Enter your address"
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <Label className="text-sm font-medium">Role</Label>
//                                 <Input
//                                     value={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
//                                     disabled
//                                     className="w-full bg-gray-100"
//                                 />
//                             </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-3 pt-4">
//                             {!isEditing ? (
//                                 <>
//                                     <Button
//                                         onClick={() => setIsEditing(true)}
//                                         className="w-full sm:w-auto"
//                                     >
//                                         Edit Profile
//                                     </Button>
//                                     <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
//                                         <DialogTrigger asChild>
//                                             <Button
//                                                 variant="destructive"
//                                                 className="w-full sm:w-auto flex items-center gap-2"
//                                             >
//                                                 <Trash2 size={16} />
//                                                 Delete Account
//                                             </Button>
//                                         </DialogTrigger>
//                                         <DialogContent>
//                                             <DialogHeader>
//                                                 <DialogTitle>Delete Account</DialogTitle>
//                                                 <DialogDescription>
//                                                     Are you sure you want to delete your account? This action cannot be undone.
//                                                     All your data will be permanently removed.
//                                                 </DialogDescription>
//                                             </DialogHeader>
//                                             <DialogFooter>
//                                                 <Button
//                                                     variant="outline"
//                                                     onClick={() => setShowDeleteDialog(false)}
//                                                 >
//                                                     Cancel
//                                                 </Button>
//                                                 <Button
//                                                     variant="destructive"
//                                                     onClick={handleDeleteAccount}
//                                                 >
//                                                     Delete Account
//                                                 </Button>
//                                             </DialogFooter>
//                                         </DialogContent>
//                                     </Dialog>
//                                 </>
//                             ) : (
//                                 <>
//                                     <Button
//                                         onClick={handleSave}
//                                         className="w-full sm:w-auto flex items-center gap-2"
//                                     >
//                                         <Save size={16} />
//                                         Save Changes
//                                     </Button>
//                                     <Button
//                                         variant="outline"
//                                         onClick={handleCancel}
//                                         className="w-full sm:w-auto flex items-center gap-2"
//                                     >
//                                         <X size={16} />
//                                         Cancel
//                                     </Button>
//                                 </>
//                             )}
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// };

// export default Profile;