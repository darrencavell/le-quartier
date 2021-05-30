import CONFIG from '../globals/config';

const CacheConfiguration = {
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME)
  },
  async _fetchRequest() {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    return this._fetchRequest(request);
  },
  async cacheAppShell(requests) {
    const openedCache = await this._openCache();
    openedCache.addAll(requests);
  },
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      return response;
    }

    return this._fetchRequest(request);
  },
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter(name => name !== CONFIG.CACHE_NAME)
      .map(filteredCacheName => caches.delete(filteredCacheName));
  }
}

export default CacheConfiguration;
