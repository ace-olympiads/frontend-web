import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';

const ProfileForm = () => {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState(user);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      username: user?.username || '',
      contact_no: user?.contact_no || '',
      image: user?.image || ''
    }
  });

  // Update form values when user changes
  useEffect(() => {
    if (user) {
      setProfile(user);
      setValue('username', user.username || '');
      setValue('contact_no', user.contact_no || '');
      setValue('image', user.image || '');
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setError(null);
    
    try {
      // Update user data directly in localStorage
      if (user) {
        const updatedUser = { ...user, ...data };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        
        // Update state
        setProfile(updatedUser);
        setUser(updatedUser);
        setIsEditing(false);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profile) {
    return <div className="text-center py-4">Loading profile...</div>;
  }

  if (error && !profile) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              disabled={loading}
              register={register}
              errors={errors}
              id="username"
              label="Username"
              type="text"
            />
            
            <Input
              disabled={loading}
              register={register}
              errors={errors}
              id="contact_no"
              label="Contact Number"
              type="text"
            />
            
            <Input
              disabled={loading}
              register={register}
              errors={errors}
              id="image"
              label="Profile Image URL"
              type="text"
            />
            
            <div className="flex space-x-4">
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button
                type="button"
                onClick={() => setIsEditing(false)}
                disabled={loading}
                secondary
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <img
                  src={profile?.image || `https://api.dicebear.com/7.x/pixel-art/svg`}
                  alt={profile?.username || 'User'}
                  className="h-24 w-24 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{profile?.username}</h3>
                <p className="text-gray-600">{profile?.email}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{profile?.email}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900">{profile?.username}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Contact Number</dt>
                  <dd className="mt-1 text-sm text-gray-900">{profile?.contact_no || 'Not provided'}</dd>
                </div>
                {profile?.role && (
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Role</dt>
                    <dd className="mt-1 text-sm text-gray-900">{profile.role}</dd>
                  </div>
                )}
                {profile?.created_at && (
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Account Created</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date(profile.created_at).toLocaleDateString()}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            
            <Button
              type="button"
              onClick={() => setIsEditing(true)}
              disabled={loading}
            >
              Edit Profile
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
