import UserLayout from '../../layouts/UserLayout';
import { Button, Card, Input } from '../../components/ui';

function Home() {
  return (
    <UserLayout>
      <div className="max-w-md mx-auto mt-10 space-y-6">
        <Card>
          <h2 className="mb-4 text-xl font-bold">MediVault UI Test</h2>

          <Input label="Medicine Name" placeholder="Enter medicine" />

          <div className="mt-4">
            <Button>Save</Button>
          </div>
        </Card>
      </div>
    </UserLayout>
  );
}

export default Home;
