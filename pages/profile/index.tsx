import { useSessionCompat as useSession } from "../../utils/auth-compat";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function Profile() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    // Update windowWidth when the component mounts and when the window is resized
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial window width
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);

    // Redirect if not authenticated
    if (session?.status === "unauthenticated") {
      router.push("/");
    }

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [session?.status, router]);

  if (session?.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session?.status === "unauthenticated") {
    return null; // Will redirect in useEffect
  }

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginBottom: '2rem' 
        }}>
          <img 
            src={session?.data?.user?.image || '/default-avatar.png'} 
            alt={session?.data?.user?.name || 'User'}
            style={{ 
              width: '100px', 
              height: '100px',
              borderRadius: '50%',
              marginBottom: '1rem',
              objectFit: 'cover'
            }}
          />
          <h1 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>
            {session?.data?.user?.name || 'User'}
          </h1>
          <p style={{ color: '#666', margin: '0.25rem 0' }}>
            {session?.data?.user?.email}
          </p>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Account Details</h2>
          <div style={{ paddingLeft: '1rem' }}>
            <p><strong>Name:</strong> {session?.data?.user?.name || 'Not provided'}</p>
            <p><strong>Email:</strong> {session?.data?.user?.email || 'Not provided'}</p>
            <p><strong>Account Created:</strong> {session?.data?.user?.created_at ? new Date(session?.data?.user?.created_at).toLocaleDateString() : 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
