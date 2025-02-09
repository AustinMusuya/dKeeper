import Debug "mo:base/Debug";
actor {

  let name = "Austin";

  public func getName(){
    Debug.print(debug_show (name));
  };

};
