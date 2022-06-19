module Api
  module V1
    class DeceasedsController < ApiController
      before_action :authenticate, only: %i[create update destroy]

      # GET /api/v1/airlines
      def index
        render json: serializer(deceaseds)
      end

      # Get deceaseds
      def deceaseds
        @deceaseds ||= Deceased.all
      end


      # fast_jsonapi serializer
      def serializer(records, options = {})
        DeceasedSerializer
          .new(records, options)
          .serialized_json
      end
    end
  end
end
