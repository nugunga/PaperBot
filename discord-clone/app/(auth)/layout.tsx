const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        height: '100vh',
      }}
      className="flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
