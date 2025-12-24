const Home = () => {
  return (
    <div class="p-4">
      <header class="mb-6 pb-4 border-b border-gray-300">
        <h1 class="text-2xl font-bold text-gray-800">Ayame Web SDK Examples</h1>
      </header>
      <nav>
        <ul class="space-y-2">
          <li>
            <a href="/sendrecv" class="text-blue-600 hover:text-blue-800 hover:underline">
              双方向送受信 (sendrecv)
            </a>
          </li>
          <li>
            <a href="/sendonly" class="text-blue-600 hover:text-blue-800 hover:underline">
              送信のみ (sendonly)
            </a>
          </li>
          <li>
            <a href="/recvonly" class="text-blue-600 hover:text-blue-800 hover:underline">
              受信のみ (recvonly)
            </a>
          </li>
          <li>
            <a href="/datachannel" class="text-blue-600 hover:text-blue-800 hover:underline">
              データチャネル (datachannel)
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
