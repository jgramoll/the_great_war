require 'rails_helper'

RSpec.describe GamesController, type: :routing do
  describe '#index' do
    it 'does not route to #index' do
      expect(get: '/the_great_wars').to_not be_routable
    end

    it 'does not route to #index.json' do
      expect(get: '/the_great_wars.json').to_not be_routable
    end
  end

  describe '#show' do
    it 'does not route to #show' do
      expect(get: '/the_great_war/1').to route_to('the_great_war#show', id: '1')
    end

    it 'routes to #show.json' do
      expect(get: '/the_great_war/1.json')
        .to route_to('the_great_war#show', id: '1', format: 'json')
    end
  end

  describe '#create' do
    it 'does not route to #create' do
      expect(post: '/the_great_war').to_not be_routable
    end

    it 'does not route to #create.json' do
      expect(post: '/the_great_war.json').to_not be_routable
    end
  end

  describe '#update' do
    it 'does not to #update via PUT' do
      expect(put: '/the_great_war/1').not_to be_routable
    end

    it 'does not route to #update via PUT.json' do
      expect(put: '/the_great_war/1.json').to_not be_routable
    end

    it 'does not route to #update via PATCH' do
      expect(patch: '/the_great_war/1').not_to be_routable
    end

    it 'does not route to #update via PATCH.json' do
      expect(patch: '/the_great_war/1.json').to_not be_routable
    end
  end

  describe 'destory' do
    it 'does not route to #destroy' do
      expect(delete: '/the_great_war/1').to_not be_routable
    end

    it 'does not route to #destroy.json' do
      expect(delete: '/the_great_war/1.json').to_not be_routable
    end
  end

  it 'does not route to #new' do
    expect(get: '/the_great_war/new')
      .to route_to('the_great_war#show', id: 'new')
  end

  it 'does not route to #edit' do
    expect(get: '/the_great_war/1/edit').to_not be_routable
  end
end
