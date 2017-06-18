require 'rails_helper'

RSpec.describe GamesController, type: :routing do
  describe '#index' do
    it 'routes to #index' do
      expect(get: '/games').to route_to('games#index')
    end

    it 'routes to #index.json' do
      expect(get: '/games.json').to route_to('games#index', format: 'json')
    end
  end

  describe '#show' do
    it 'does not route to #show' do
      expect(get: '/games/1').to_not be_routable
    end

    it 'routes to #show.json' do
      expect(get: '/games/1.json')
        .to route_to('games#show', id: '1', format: 'json')
    end
  end

  describe '#create' do
    it 'does not route to #create' do
      expect(post: '/games').to_not be_routable
    end

    it 'routes to #create.json' do
      expect(post: '/games.json').to route_to('games#create', format: 'json')
    end
  end

  describe '#update' do
    it 'does not to #update via PUT' do
      expect(put: '/games/1').not_to be_routable
    end

    it 'routes to #update via PUT.json' do
      expect(put: '/games/1.json')
        .to route_to('games#update', id: '1', format: 'json')
    end

    it 'does not route to #update via PATCH' do
      expect(patch: '/games/1').not_to be_routable
    end

    it 'routes to #update via PATCH.json' do
      expect(patch: '/games/1.json')
        .to route_to('games#update', id: '1', format: 'json')
    end
  end

  describe 'destory' do
    it 'does not route to #destroy' do
      expect(delete: '/games/1').to_not be_routable
    end

    it 'routes to #destroy.json' do
      expect(delete: '/games/1.json')
        .to route_to('games#destroy', id: '1', format: 'json')
    end
  end

  it 'does route to #new' do
    expect(get: '/games/new').to route_to('games#new')
  end

  it 'does not route to #edit' do
    expect(get: '/games/1/edit').to_not be_routable
  end
end
