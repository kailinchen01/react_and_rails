class DeceasedSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :age, :description
  
  end
  